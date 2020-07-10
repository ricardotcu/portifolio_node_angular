import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListaDeUsuariosComponent,
    ListaDeProdutosComponent,
    ChomeComponent,
    TodosProdutosComponent,
    DetalhesProdutoComponent,
    CarrinhoComponent,
    ConfirmacaoComponent,
    AboutComponent,
    ContatoComponent,
    CheckoutComponent,
    LoginCComponent,
    CatagoriasComponent,
    RegisterCComponent,
    AddProdutoComponent,
    AddUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
