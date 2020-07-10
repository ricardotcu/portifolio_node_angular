import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Produto } from '../entity/Produto'
import { Instagram } from '../entity/Instagram'
import { Blog } from '../entity/Blog'
import { Slider } from '../entity/Slider'
import { Categoria } from './../entity/Categorias';

export const getHomeAdmin = async(req: Request, res: Response) => {
    const produtos = await getRepository(Produto).find();

    return res.json(produtos);
}

export const addInstagramAdmin = async(req: Request, res: Response) => {
    const { caminho } = req.body;

    const instagram = await getRepository(Instagram).save({
        caminho
    });

    return res.json(instagram);
}

export const addCategoriaAdmin = async(req: Request, res: Response) => {
    const { caminho } = req.body;

    const categoria = await getRepository(Categoria).save({
        caminho
    });

    return res.json(categoria);
}

export const addBlogAdmin = async(req: Request, res: Response) => {
    const { nome, descricao, caminho } = req.body;

    const blog = await getRepository(Blog).save({
        nome,
        descricao,
        caminho
    });

    return res.json(blog);
}

export const addSlidersAdmin = async(req: Request, res: Response) => {
    const { descricao, caminho } = req.body;

    const blog = await getRepository(Slider).save({
        descricao,
        caminho
    });

    return res.json(blog);
}

export const save_produto = async(req: Request, res: Response) => {
    const produtos = await getRepository(Produto).save(req.body);

    return res.json(produtos);
}
