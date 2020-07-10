import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  '../models/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent {
  title = 'login';	
  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  readonly apiURL : string;
  public rota: Router;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  login(user: User){
    this.http.post(`${this.apiURL}/loginc`, user)
      .subscribe(result => {
        var obj = JSON.parse(JSON.stringify(result));
        console.log(obj)
        window.localStorage.setItem('currentUserClient', JSON.stringify(result));
        console.log(window.localStorage.getItem('currentUserClient'))
        this.r.navigate(['/chome']);
      });
  }
  
  onSubmit() {
    this.login(this.profileForm.value);
  }

}
