import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Produto } from '../entity/Produto'
import { Slider } from '../entity/Slider'
import { Blog } from '../entity/Blog'
import { Home } from '../models/Home'
import { Categoria } from './../entity/Categorias';
import { Instagram } from '../entity/Instagram'

//retorna os produtos da home page, produtos marcados como mais vendidos
export const getHome = async(req: Request, res: Response) => {
    const destaque = 'sim';

    const destaques = await getRepository(Produto).find({
        where: {
            destaque
        }
    });

    const slides = await getRepository(Slider).find();
    const blog = await getRepository(Blog).find();
    const instagram = await getRepository(Categoria).find();
    const categorias = await getRepository(Instagram).find();
    const home_content = new Home(destaques, slides, blog, instagram, categorias)

    return res.json(home_content);
}

//retorna os produtos da produtos page
export const getProdutos = async(req: Request, res: Response) => {
    const produtos = await getRepository(Produto).find();
    return res.json(produtos);
}

//retorna um produto da produto page
export const getProduto = async(req: Request, res: Response) => {
    const { id } = req.params;

    const produto = await getRepository(Produto).find({
        where: {
            id
        }
    });
    console.log(produto)
    return res.json(produto);
}

