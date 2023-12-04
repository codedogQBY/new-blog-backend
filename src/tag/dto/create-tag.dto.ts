import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateTagDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    descript: string;

    @IsOptional()
    @IsNumber()
    sort: number;

    @IsOptional()
    create_at: Date;

    @IsOptional()
    update_at: Date;
}
