import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router,  NavigationExtras } from '@angular/router';

declare var paypal;

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  paidFor = false;

  readonly apiURL : string;
  public carrinho: any;
  public valor_total = 0;

  constructor(private http : HttpClient, private router: Router){
    this.apiURL = 'http://localhost:3333';
  }

  ngOnInit(): void {
    const token = JSON.parse(window.localStorage.getItem('currentUserClient')).token;
    console.log(token)
    console.log(window.localStorage.getItem('currentUserClient'))

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };

    this.http.get(`${this.apiURL}/carrinho`, httpOptions)
      .subscribe(result => {
        this.carrinho = result;
        console.log(this.carrinho)
        for (let i = 0; i < this.carrinho.length; i++){
          this.valor_total += this.carrinho[i].price;
        }
      });

      paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'descrição dos produtos',
                amount: {
                  currency_code: 'BRL',
                  value: this.valor_total
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  carregarPagamento() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "carrinho": JSON.stringify(this.carrinho)
      }
    };
    this.router.navigate(["pagamento"],  navigationExtras);
  }

}
