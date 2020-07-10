import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Carrinho } from '../entity/Carrinho';

//retorna todos os produtos do carrinho(depois so usuarios)
export const getCarrinho = async(req: Request, res: Response) => {

    const destaques = await getRepository(Carrinho).find();

    return res.json(destaques);
}

//retorna os produtos da home page, produtos marcados como mais vendidos
export const postCarrinho = async(req: Request, res: Response) => {

  const { id, nome, caminho, descricao, valor } = req.body;

  const card = await getRepository(Carrinho).save({
    name: nome,
    sku: id,
    descricao,
    caminho,
    price: valor
  });
  return res.json(card);
}
