import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100 })
    sub_title: string;

    @Column({ length: 100 })
    keyword: string;

    @Column({ type: 'text' })
    descript: string;

    @Column({ length: 100 })
    url: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 50 })
    icp: string;

    @Column({ default: 0 })
    likes: number;
}
