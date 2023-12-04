import { IsNumber, IsString, IsDate, IsIP, IsNotEmpty, IsOptional, IsIn } from 'class-validator';
export class CreateCommentDto {
    @IsNumber()
    id: number;

    @IsNumber()
    post_id: number;

    @IsNumber()
    pid: number;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    likes: number;

    @IsNumber()
    is_top: number;

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

    @IsNumber()
    @IsIn([0, 1, 2])
    state: number;

    @IsDate()
    create_at: Date;

    @IsDate()
    update_at: Date;
}
