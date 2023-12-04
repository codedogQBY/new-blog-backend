import { IsNumber, IsString, IsDate, IsIP, IsNotEmpty, IsOptional, IsIn } from 'class-validator';
export class CreateBoardDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    @IsIn([0, 1, 2])
    state: number;

    @IsIP()
    ip: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    range: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    agent: string;

    @IsDate()
    create_time: Date;
}
