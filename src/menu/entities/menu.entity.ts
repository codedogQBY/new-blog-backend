// menu.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column()
    parent_id: number;

    @Column({ nullable: true })
    icon: string;

    @Column()
    show: number;

    @Column({ nullable: true })
    component: string;

    @Column({ nullable: true })
    redirect: string;

    @Column({ nullable: true })
    permission: string;

    @Column({ nullable: true })
    serial_num: number;

    @Column({ nullable: true })
    path: string;

    @Column()
    hide_children: number;

    @Column()
    type: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
