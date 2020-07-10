import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Blog{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string

    @Column()
    descricao: string

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
