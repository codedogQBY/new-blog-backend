import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100 })
    url: string;

    @Column()
    create_at: Date;

    @Column({ length: 100, nullable: true })
    slogan: string;

    @Column({ length: 100, nullable: true })
    gravatar: string;

    @Column({ length: 100 })
    email: string;

    @Column()
    state: number;
}
