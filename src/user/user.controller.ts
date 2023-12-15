import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailService } from '../email/email.service';
import { RedisService } from '../redis/redis.service';

@Controller('user')
export class UserController {
  @Inject(EmailService)
  private emailService: EmailService;
  @Inject(RedisService)
  private redisService: RedisService;

  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() registerUser: CreateUserDto) {
    return this.userService.register(registerUser);
  }

  @Get('register_captcha')
  async registerCaptcha(@Query('email') email: string) {
    const captcha = Math.random().toString().slice(2, 8);
    await this.redisService.set(`captcha_${email}`, captcha, 60 * 10);
    await this.emailService.sendMail({
      to: email,
      subject: '注册验证码',
      text: `<p>您的注册验证码是${captcha}，有效期10分钟</p>`,
    });
    return {
      message: '验证码发送成功',
    };
  }
}
