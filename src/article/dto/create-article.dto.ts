import { IsInt, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateArticleDto {
    @IsInt()
    id: number;

    @IsString()
    title: string;

    @IsString()
    keyword: string;

    @IsOptional()
    @IsString()
    descript?: string;

    @IsInt()
    is_top: number;

    @IsArray()
    tag: string[];

    @IsString()
    content: string;

    @IsInt()
    state: number;

    @IsInt()
    publish: number;

    @IsOptional()
    @IsString()
    thumb?: string;

    @IsInt()
    type: number;

    @IsOptional()
    create_at?: Date;

    @IsOptional()
    update_at?: Date;

    @IsOptional()
    meta?: {
        views: number;
        likes: number;
        comments: number;
    };
}
