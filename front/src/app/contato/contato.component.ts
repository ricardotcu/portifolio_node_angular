import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  '../models/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  title = 'login';	
  readonly apiURL : string;
  public rota: Router;
  profileForm = new FormGroup({
    message: new FormControl(''),
    nome: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
  });
  
  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }
  
  onSubmit() {
    
  }

}
