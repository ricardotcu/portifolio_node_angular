import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  '../models/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
    this.http.post(`${this.apiURL}/register`, user)
      .subscribe(result => {
        var obj = JSON.parse(JSON.stringify(result));
        window.localStorage.setItem('currentUser', JSON.stringify(result));
        console.log(window.localStorage.getItem('currentUser'))
        this.r.navigate(['/home']);
      });
  }
  
  onSubmit() {
    this.register(this.profileForm.value);
  }

}
