// menu.entity.ts

import { IsNumber, IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateMenuDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    parent_id: number;

    @IsString()
    @IsOptional()
    icon?: string;

    @IsNumber()
    show: number;

    @IsString()
    @IsOptional()
    component?: string;

    @IsString()
    @IsOptional()
    redirect?: string;

    @IsString()
    @IsOptional()
    permission?: string;

    @IsNumber()
    @IsOptional()
    serial_num?: number;

    @IsString()
    @IsOptional()
    path?: string;

    @IsNumber()
    hide_children: number;

    @IsNumber()
    type: number;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}
