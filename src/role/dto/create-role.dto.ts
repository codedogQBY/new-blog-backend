import { IsNumber, IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateRoleDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    describe?: string;

    @IsNumber()
    parent_id: number;

    @IsNumber()
    @IsOptional()
    serial_num?: number;

    @IsString()
    @IsOptional()
    menu_ids?: string;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}
