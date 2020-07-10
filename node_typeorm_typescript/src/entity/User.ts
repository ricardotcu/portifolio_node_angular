import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({  nullable : true  })
    sobrenome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column({  nullable : true  })
    cargo: string;

    @Column({  nullable : true  })
    rg: string;

    @Column({  nullable : true  })
    cpf: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}