import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from  '../models/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent {
  title = 'add-usuario';	
  readonly apiURL : string;
  public rota: Router;
  profileForm = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    cargo: new FormControl(''),
    rg: new FormControl(''),
    cpf: new FormControl('')
  });
  
  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }
  
  add(user: User) {
    const token = JSON.parse(window.localStorage.getItem('currentUser')).token;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };

    this.http.post(`${this.apiURL}/add-usuario-admin`, user, httpOptions)
      .subscribe(result => {
        this.r.navigate(['/lista-de-usuarios']);
      });
  }

  onSubmit() {
    this.add(this.profileForm.value);
  }

}
