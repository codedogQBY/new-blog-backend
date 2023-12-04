import { IsNumber, IsString, IsDate, IsNotEmpty, IsOptional, IsIn } from 'class-validator';
export class CreateDiaryDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsDate()
    create_at: Date;

    @IsDate()
    update_at: Date;

    @IsNumber()
    @IsIn([1, 2])
    publish: number;

    @IsString()
    @IsNotEmpty()
    weather: string;

    @IsNumber()
    likes: number;
}
