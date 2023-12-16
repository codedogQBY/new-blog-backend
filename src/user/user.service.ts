import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { RedisService } from '../redis/redis.service';
import { md5 } from '../utils';

@Injectable()
export class UserService {
  private Logger = new Logger();

  @InjectRepository(User)
  private useRepository: Repository<User>;
  @Inject(RedisService)
  private redisService: RedisService;

  async register(user: CreateUserDto) {
    const captcha = await this.redisService.get(
      `register_captcha_${user.email}`,
    );
    if (!captcha) {
      throw new HttpException('验证码已失效', HttpStatus.BAD_REQUEST);
    }

    if (captcha !== user.captcha) {
      throw new HttpException('验证码错误', HttpStatus.BAD_REQUEST);
    }

    // 验证邮箱或用户名是否已经存在
    const existUser = await this.useRepository.findOne({
      where: [{ email: user.email }, { user_name: user.user_name }],
    });

    if (existUser) {
      throw new HttpException('邮箱或用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const newUser = new User();
    newUser.email = user.email;
    newUser.user_name = user.user_name;
    newUser.password = md5(user.password);

    try {
      await this.useRepository.save(newUser);
      await this.redisService.set(`captcha_${user.email}`, null);
      return {
        message: '注册成功',
      };
    } catch (error) {
      this.Logger.error(error, UserService);
      throw new HttpException('注册失败', HttpStatus.BAD_REQUEST);
    }
  }
}
