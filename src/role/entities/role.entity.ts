// role.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ nullable: true })
    describe: string;

    @Column()
    parent_id: number;

    @Column({ nullable: true })
    serial_num: number;

    @Column({ length: 255, nullable: true })
    menu_ids: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
