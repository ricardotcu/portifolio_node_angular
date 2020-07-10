import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})
export class ListaDeUsuariosComponent implements OnInit {
  title = 'usuarios';	
  readonly apiURL : string;
  public rota: Router;
  public users: any;
  profileForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    const token = JSON.parse(window.localStorage.getItem('currentUser')).token;

    const httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    })

    this.http.get(`${this.apiURL}/list-usuarios-admin`, {headers: httpOptions})
      .subscribe(result => {
        this.users = result;
      });
  }
  
  onSubmit() {

  }


}
