import { Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const auth_header = req.headers.authorization;
    const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
    
    if(!auth_header){
        return res.status(401).json({message: 'token expirou 1'});
    }
    
    //const [, token] = auth_header.split(' ');

    try{
        await jwt.verify(auth_header, secret);
        next();
    }
    catch(error){
        return res.status(401).json({message: 'token expirou 2'})
    }

}