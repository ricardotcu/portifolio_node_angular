import { Request, Response } from 'express';
const paypal = require('paypal-rest-sdk')

//retorna os produtos da home page, produtos marcados como mais vendidos
export const postPayment = async(req: Request, res: Response) => {

    paypal.configure({
        "mode": "sandbox",
        "client_id": "AXDAtdnuKCzx80ZcmjTV-hT7LFjOLZkUeozfUS7q7TAjyHSbJRo22Tqve2-LurA8alqssznro4AOePml",
        "client_secret": "EDrg3zj-Nvk4cs29DeEXri0ki6LXnmBL8Kh4r5KFIGEEVy7brEd_SZ8R9A7rjYHE0biGQwLx_25II0Dq"
      });
    
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": `http://localhost:3333/sucess`,
            "cancel_url": "http://localhost:3333/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": req.body[0].name,
                    "sku": req.body[0].sku,
                    "price": req.body[0].price,
                    "currency": "BRL",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "BRL",
                "total": req.body[0].price
            },
            "description": "pagamento"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, pag) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(pag);
            
            pag.links.forEach((link) => {
                if (link.rel === 'approval_url') {
                    return res.redirect(link.href)
                }
            });
        }
    });
}

export const sucessPayment = async (req: Request, res: Response) => {
    console.log('sucess')
    const payerID = req.query.PayerID;
    const paymentId = req.query.paymentID

    const { id } = req.body;

    const valor = {
        "currency": "BRL",
        "total": id
    }

    const execute_payment_json = {
        "payer_id": payerID,
        "transactions": [{
            "amount": valor
        }]
    }

    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
        if (error) {
            console.warn(error.response)
            throw error
        } else {
            console.log("pagamento concluido com sucesso. muito obrigado e volte sempre!!")
            console.log(JSON.stringify(payment))
        }
    })

    return res.json();
  }