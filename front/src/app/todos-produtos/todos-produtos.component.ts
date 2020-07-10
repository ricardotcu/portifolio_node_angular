import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos-produtos',
  templateUrl: './todos-produtos.component.html',
  styleUrls: ['./todos-produtos.component.css']
})
export class TodosProdutosComponent implements OnInit {
  readonly apiURL : string;
  public rota: Router;
  public produtos: any;
  profileForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    this.http.get(`${this.apiURL}/produtos`)
      .subscribe(result => {
        this.produtos = result;
      });
  }

  onSubmit() {
    
  }
  onSubmit2() {
  }
}
