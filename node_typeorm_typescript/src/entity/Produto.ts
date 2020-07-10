import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Produto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column() 
    valor: number;

    @Column() 
    caminho: string;

    @Column({  nullable : true  })
    peso: string;

    @Column({  nullable : true  })
    comprimento: number;

    @Column({  nullable : true  })
    altura: number;

    @Column({  nullable : true  })
    largura: number;

    @Column({  nullable : true  })
    destaque: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}