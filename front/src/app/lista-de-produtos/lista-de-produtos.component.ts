import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
  
export class ListaDeProdutosComponent implements OnInit {
  title = 'list produtos';	
  readonly apiURL : string;
  public rota: Router;
  public produtos: any;
  profileForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    const token = JSON.parse(window.localStorage.getItem('currentUser')).token;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };

    this.http.get(`${this.apiURL}/list-produtos-admin`, httpOptions)
      .subscribe(result => {
        this.produtos = result;
      });
  }
  
  onSubmit() {
    
  }

}
