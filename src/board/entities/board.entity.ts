import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ type: 'text' })
    content: string;

    @Column()
    state: number;

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
    create_time: Date;
}
