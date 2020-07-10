import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Instagram{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    caminho: string

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}
