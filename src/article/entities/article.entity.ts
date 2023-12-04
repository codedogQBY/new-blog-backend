import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    title: string;

    @Column({ length: 100, nullable: false })
    keyword: string;

    @Column({ length: 255, nullable: true })
    descript: string;

    @Column({ default: 0 })
    is_top: number;

    @Column('simple-array')
    tag: string[];

    @Column('text', { nullable: false })
    content: string;

    @Column({ default: 1 })
    state: number;

    @Column({ default: 1 })
    publish: number;

    @Column({ length: 255, nullable: true })
    thumb: string;

    @Column({ default: 1 })
    type: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    update_at: Date;

    @Column('json', { nullable: true })
    meta: {
        views: number;
        likes: number;
        comments: number;
    };
}


