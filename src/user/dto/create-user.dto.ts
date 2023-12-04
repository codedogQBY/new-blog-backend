import { IsNumber, IsString, IsDate, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    user_name: string;

    @IsString()
    @IsOptional()
    slogan?: string;

    @IsString()
    @IsOptional()
    gravatar?: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    role_ids?: string;

    @IsString()
    @IsOptional()
    info?: string;

    @IsNumber()
    deleted: number;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}
