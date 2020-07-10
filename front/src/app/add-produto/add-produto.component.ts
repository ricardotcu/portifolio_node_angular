import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Produto } from  '../models/Produto';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent {
  title = 'add-produto';	
  readonly apiURL : string;
  public rota: Router;
  profileForm = new FormGroup({
    nome: new FormControl(''),
    descricao: new FormControl(''),
    valor: new FormControl(''),
    caminho: new FormControl('')
  });
  
  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  add(prod: Produto) {
    const token = JSON.parse(window.localStorage.getItem('currentUser')).token;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    console.log(prod);
    this.http.post(`${this.apiURL}/add-produto-admin`, prod, httpOptions)
      .subscribe(result => {
        this.r.navigate(['/lista-de-produtos']);
      });
  }

  onSubmit() {
    this.add(this.profileForm.value);
  }

}
