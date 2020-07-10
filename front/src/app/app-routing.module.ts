import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { ChomeComponent } from './chome/chome.component';
import { TodosProdutosComponent } from './todos-produtos/todos-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginCComponent } from './login-c/login-c.component';
import { CatagoriasComponent } from './catagorias/catagorias.component';
import { RegisterCComponent } from './register-c/register-c.component';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';

const routes: Routes = [
  { path: '',   redirectTo: 'chome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lista-de-produtos', component: ListaDeProdutosComponent },
  { path: 'lista-de-usuarios', component: ListaDeUsuariosComponent },
  { path: 'chome', component: ChomeComponent },
  { path: 'todos-produtos', component: TodosProdutosComponent },
  { path: 'detalhes-produto/:id', component: DetalhesProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'loginC', component: LoginCComponent },
  { path: 'catagorias', component: CatagoriasComponent },
  { path: 'registerC', component: RegisterCComponent },
  { path: 'add-produto', component: AddProdutoComponent },
  { path: 'add-usuario', component: AddUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
