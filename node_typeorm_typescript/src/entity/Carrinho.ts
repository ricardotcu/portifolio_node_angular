import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Carrinho{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string

    @Column()
    sku: number;
  
    @Column()
    descricao: string

    @Column()
    caminho: string
  
    @Column()
    price: number

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

    @Column({  nullable : true  })
    id_user: number;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}
