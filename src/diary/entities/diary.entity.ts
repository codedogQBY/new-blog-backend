// diary.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Diary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ type: 'text' })
    content: string;

    @Column()
    create_at: Date;

    @Column()
    update_at: Date;

    @Column()
    publish: number;

    @Column({ length: 50 })
    weather: string;

    @Column()
    likes: number;
}
