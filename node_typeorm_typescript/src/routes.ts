import { Router } from 'express';
import * as cors from 'cors';
import { getHome, getProdutos, getProduto } from './controller/ChomeController';
import { getCarrinho, postCarrinho } from './controller/CarrinhoController';
import { getHomeAdmin, addInstagramAdmin, addCategoriaAdmin, addBlogAdmin, addSlidersAdmin } from './controller/HomeController';
import { listProdutosAdmin, addProdutosAdmin, delProdutoAdmin, upProdutoAdmin } from './controller/ProdutosController';
import { register, registerC, listUsersAdmin, addUsersAdmin, login, loginc, delUserAdmin, upUserAdmin } from './controller/AccountController';
import { auth } from './middlewares/auth';



const routes = Router();

//opçoes para cors midddleware
const options:cors.CorsOptions = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization"
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: [
        "*",
        "http://localhost:4200"
    ],
    preflightContinue: false
};

//use cors middleware
routes.use(cors(options));

routes.get('/home', getHome); //feito
routes.get('/produtos', getProdutos); //feito
routes.get('/produto/:id', getProduto); //feito

//AccountController
routes.post('/register', register); //feito
routes.post('/registerC', registerC); //feito
routes.post('/login', login); //feito
routes.post('/loginc', loginc); //

//middleware autenticacao
routes.use(auth);

//rotas apenas para cliente logado
routes.get('/carrinho', getCarrinho); //feito
routes.post('/addcarrinho', postCarrinho); //feito

//permitidas para usuarios admin
//HomeController
routes.post('/add-instagram-admin', addInstagramAdmin);
routes.post('/add-blog-admin', addBlogAdmin);

//HomeController 
routes.get('/home-admin', getHomeAdmin); //feito mas alterarei ainda
routes.post('/add-sliders-admin', addSlidersAdmin);
//ProdutoController
routes.get('/list-produtos-admin', listProdutosAdmin); //feito
routes.put('/up-produto-admin/:id', upProdutoAdmin);
routes.post('/add-produto-admin', addProdutosAdmin);//
routes.delete('/del-produto-admin/:id', delProdutoAdmin);
//UsuarioController
routes.get('/list-usuarios-admin', listUsersAdmin); //feito
routes.post('/add-usuario-admin', addUsersAdmin); //feito
routes.delete('/del-usuario-admin/:id', delUserAdmin);
routes.put('/up-usuario-admin/:id', upUserAdmin);
routes.post('/add-categoria-admin', addCategoriaAdmin);
//enable pre-flight
routes.options("*", cors(options));

export default routes;
