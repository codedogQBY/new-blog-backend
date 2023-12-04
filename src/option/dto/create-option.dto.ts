import { IsNumber, IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class CreateOptionDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    sub_title: string;

    @IsString()
    @IsNotEmpty()
    keyword: string;

    @IsString()
    @IsNotEmpty()
    descript: string;

    @IsString()
    @IsNotEmpty()
    url: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    icp: string;

    @IsNumber()
    likes: number;
}
