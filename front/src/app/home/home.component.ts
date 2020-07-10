import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profileForm = new FormGroup({
    search: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
