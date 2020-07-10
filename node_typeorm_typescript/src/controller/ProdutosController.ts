import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Produto } from '../entity/Produto'

//retorna todos os produtos
export const listProdutosAdmin = async(req: Request, res: Response) => {
    const produtos = await getRepository(Produto).find();
    return res.json(produtos);
}

//add usuario no banco pelo sistema
export const addProdutosAdmin = async(req: Request, res: Response) => {
    const { nome, descricao, valor, caminho } = req.body;
    
    const prod = await getRepository(Produto).save({
        nome,
        descricao,
        valor,
        caminho
    });
    console.log(prod)
    return res.json(prod);
}

//deletar um produto no banco
export const delProdutoAdmin = async(req: Request, res: Response) => {
    const { id } = req.params;

    const resultado = await getRepository(Produto).delete(id);

    if(resultado.affected === 0){
        return res.status(404).json({message: 'erro del'})
    }
    console.log('del com sucesso')
    return res.json(resultado);
}

//edita um usuario no banco
export const upProdutoAdmin = async(req: Request, res: Response) => {
    const { id } = req.params;

    const resultado = await getRepository(Produto).update(id, req.body);

    if(resultado.affected === 0){
        return res.status(404).json({message: 'erro up'})
    }
    console.log('up com sucesso')
}

//retorna um produto
export const getProdutosId = async(req: Request, res: Response) => {
    const produtos = await getRepository(Produto).find();
    return res.json(produtos);
}