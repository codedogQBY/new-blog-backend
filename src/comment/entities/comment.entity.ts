// comment.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    post_id: number;

    @Column()
    pid: number;

    @Column({ length: 500 })
    content: string;

    @Column()
    likes: number;

    @Column()
    is_top: number;

    @Column({ length: 15 })
    ip: string;

    @Column({ length: 50 })
    city: string;

    @Column({ length: 50 })
    range: string;

    @Column({ length: 50 })
    country: string;

    @Column({ length: 100 })
    agent: string;

    @Column()
    state: number;

    @Column()
    create_at: Date;

    @Column()
    update_at: Date;
}
