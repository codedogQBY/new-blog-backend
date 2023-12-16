import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, RegisterCaptchaDto } from './dto/create-user.dto';
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
  async registerCaptcha(@Query() params: RegisterCaptchaDto) {
    const { email } = params;
    const captcha = Math.random().toString().slice(2, 8);
    // 发送频繁验证
    const lastCaptcha = await this.redisService.get(
      `register_captcha_${email}`,
    );
    if (lastCaptcha) {
      return {
        message: '验证码已发送，请稍后再试',
      };
    }
    await this.redisService.set(`register_captcha_${email}`, captcha, 60 * 10);
    await this.emailService.sendMail({
      to: email,
      subject: '注册验证码',
      text: `<p>您的注册验证码是<span style="color: red">${captcha}</span>，有效期10分钟</p>`,
    });
    return {
      message: '验证码发送成功',
    };
  }

  // 登录验证码
  @Get('login_captcha')
  async loginCaptcha(@Query('email') params: RegisterCaptchaDto) {
    const { email } = params;
    const captcha = Math.random().toString().slice(2, 8);
    // 发送频繁验证
    const lastCaptcha = await this.redisService.get(`login_captcha_${email}`);
    if (lastCaptcha) {
      return {
        message: '验证码已发送，请稍后再试',
      };
    }
    await this.redisService.set(`login_captcha_${email}`, captcha, 60 * 10);
    await this.emailService.sendMail({
      to: email,
      subject: '登录验证码',
      text: `<p>您的登录验证码是<span style="color: red">${captcha}</span>，有效期10分钟</p>`,
    });
    return {
      message: '验证码发送成功',
    };
  }
}
