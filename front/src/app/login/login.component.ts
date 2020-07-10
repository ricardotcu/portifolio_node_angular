import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  '../models/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'login';	
  readonly apiURL : string;
  public rota: Router;
  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  
  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  login(user: User){
    this.http.post(`${this.apiURL}/login`, user)
      .subscribe(result => {
        var obj = JSON.parse(JSON.stringify(result));
        window.localStorage.setItem('currentUser', JSON.stringify(result));
        this.r.navigate(['/home']);
      });
  }
  
  onSubmit() {
    this.login(this.profileForm.value);
  }

}
