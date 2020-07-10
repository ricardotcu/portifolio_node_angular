import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  readonly apiURL : string;
  public rota: Router;
  public produto: any;
  public produto_add_carrinho: any;
  public id_produto: any;
  profileForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id_produto = parametros['id']
      }
    });

    this.http.get(`${this.apiURL}/produto/${this.id_produto}`)
      .subscribe(result => {
        this.produto = result;
      });
  }

  add_card() {
    const token = JSON.parse(window.localStorage.getItem('currentUserClient')).token;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    
    this.http.post(`${this.apiURL}/addcarrinho`, this.produto[0], httpOptions)
      .subscribe(result => {
        this.produto_add_carrinho = result;
        this.r.navigate(['/chome']);
      });
  }

  onSubmit() {
    
  }

}
