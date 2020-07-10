import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
  
export class ChomeComponent implements OnInit {
  profileForm = new FormGroup({
    search: new FormControl('')
  });
  title = 'home';	
  readonly apiURL : string;
  public rota: Router;
  public resumo: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    this.http.get(`${this.apiURL}/home`)
      .subscribe(result => {
        this.resumo = result;
      });
  }

  onSubmit() {
    
  }

}
