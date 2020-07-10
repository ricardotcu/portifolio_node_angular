import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  '../models/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-c',
  templateUrl: './register-c.component.html',
  styleUrls: ['./register-c.component.css']
})
export class RegisterCComponent {
  title = 'login';	
  profileForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  });
  readonly apiURL : string;
  public rota: Router;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  register(user: User){
    this.http.post(`${this.apiURL}/registerC`, user)
      .subscribe(result => {
        var obj = JSON.parse(JSON.stringify(result));
        window.localStorage.setItem('currentUserClient', JSON.stringify(result));
        console.log(window.localStorage.getItem('currentUserClient'))
        this.r.navigate(['/chome']);
      });
  }
  
  onSubmit() {
    this.register(this.profileForm.value);
  }

}
