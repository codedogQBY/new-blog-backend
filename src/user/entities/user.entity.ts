// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 128 })
    email: string;

    @Column({ length: 128 })
    user_name: string;

    @Column({ nullable: true })
    slogan: string;

    @Column({ nullable: true })
    gravatar: string;

    @Column()
    password: string;

    @Column({ length: 128, nullable: true })
    role_ids: string;

    @Column({ type: 'text', nullable: true })
    info: string;

    @Column()
    deleted: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
