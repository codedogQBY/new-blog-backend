import { IsNumber, IsString, IsDate, IsEmail, IsNotEmpty, IsOptional, IsIn, IsUrl } from 'class-validator';
export class CreateLinkDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsUrl()
    url: string;

    @IsDate()
    create_at: Date;

    @IsString()
    @IsOptional()
    slogan?: string;

    @IsString()
    @IsOptional()
    gravatar?: string;

    @IsEmail()
    email: string;

    @IsNumber()
    @IsIn([1, 2])
    state: number;
}
