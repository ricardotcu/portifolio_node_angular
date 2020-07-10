import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  profileForm = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    endereço: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    cep: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
