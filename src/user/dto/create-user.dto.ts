import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail({
    domain_specific_validation: true,
  })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  user_name: string;

  @IsString()
  @IsOptional()
  slogan?: string;

  @IsString()
  @IsOptional()
  gravatar?: string;

  @IsNotEmpty({
    message: '密码不能为空',
  })
  @MinLength(6, {
    message: '密码长度不能小于6位',
  })
  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  role_ids?: string;

  @IsString()
  @IsOptional()
  info?: string;
  @IsNotEmpty({
    message: '验证码不能为空',
  })
  captcha: string;
}

export class RegisterCaptchaDto {
  @IsEmail()
  readonly email: string;
}
