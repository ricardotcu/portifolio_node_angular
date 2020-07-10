import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { User } from '../entity/User';
import { Cliente } from '../entity/Cliente';
import * as jwt from 'jsonwebtoken';

//cria usuario no banc
export const register = async(req: Request, res: Response) => {
    const { nome, sobrenome, email, senha, cargo, rg, cpf } = req.body;

    const senha_hash = await bcrypt.hash(senha, 8);

    const users = await getRepository(User).save({
        nome,
        sobrenome,
        email,
        senha: senha_hash,
        cargo,
        rg,
        cpf
    });
    return res.json(users);
}

//register cliente
export const registerC = async(req: Request, res: Response) => {
    const { nome, email, senha } = req.body;

    const senha_hash = await bcrypt.hash(senha, 8);

    const user = await getRepository(Cliente).save({
        nome,
        email,
        senha: senha_hash
    });

    return res.json(user);
}

//loga
export const login = async(req: Request, res: Response) => {
    const { email, senha} = req.body;
    const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

    const user = await getRepository(User).find({
        where: {
            email
        }
    });
    
    if(user.length === 1){ 
        if(await bcrypt.compare(senha, user[0].senha)){
            const token = jwt.sign({ id: user[0].id }, secret, {
                expiresIn: '1d'
            });

            const data = {
                id: user[0].id,
                nome: user[0].nome,
                email: user[0].email,
                token
            }

            return res.json(data);
        }
        else{
            return res.status(404).json({message: 'user nao existe'});
        }
    }
    else{
        return res.status(404).json({message: 'erro ao logar'});
    }
}

//loga cliente
export const loginc = async(req: Request, res: Response) => {
    const { email, senha} = req.body;
    const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

    const client = await getRepository(Cliente).find({
        where: {
            email
        }
    });
    
    if(client.length === 1){ 
        if(await bcrypt.compare(senha, client[0].senha)){
            const token = jwt.sign({ id: client[0].id }, secret, {
                expiresIn: '1d'
            });

            const data = {
                id: client[0].id,
                nome: client[0].nome,
                email: client[0].email,
                token
            }
            console.log(data)

            return res.json(data);
        }
        else{
            return res.status(404).json({message: 'cliente nao existe'});
        }
    }
    else{
        return res.status(404).json({message: 'erro ao logar cliente'});
    }
}

//recupera todos os usuarios no banco
export const listUsersAdmin = async(req: Request, res: Response) => {
    const users = await getRepository(User).find();
    return res.json(users);
}

//add usuario no banco pelo sistema
export const addUsersAdmin = async(req: Request, res: Response) => {
    const { nome, sobrenome, email, cargo, rg, cpf, senha } = req.body;
    const senha_hash = await bcrypt.hash(senha, 8);

    const users = await getRepository(User).save({
        nome,
        sobrenome,
        email,
        senha: senha_hash,
        cargo,
        rg,
        cpf
    });

    return res.json(users);
}

//deletar um usuario no banco
export const delUserAdmin = async(req: Request, res: Response) => {
    const { id } = req.params;

    const resultado = await getRepository(User).delete(id);

    if(resultado.affected === 0){
        return res.status(404).json({message: 'erro'})
    }
}

//edita um usuario no banco
export const upUserAdmin = async(req: Request, res: Response) => {
    const { id } = req.params;

    const resultado = await getRepository(User).update(id, req.body);

    if(resultado.affected === 0){
        return res.status(404).json({message: 'erro up'})
    }
    console.log('up com sucesso')
}


