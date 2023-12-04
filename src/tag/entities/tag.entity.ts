import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    descript: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    update_at: Date;

    @Column({ type: 'int', default: 0 })
    sort: number;
}
