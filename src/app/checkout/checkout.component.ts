import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { CheckOutService } from '../check-out.service';
import { ShoppingCartItem } from '../Models/shopping-cart-items';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    
  Total = 0; 
  cartItems : ShoppingCartItem[]= [];
    userId : string;
  constructor(private checkoutService : CheckOutService,private auth : AngularFireAuth,private router : Router,private cartService : ShoppingCartService) {

   }

 async ngOnInit() {

  this.auth.authState.subscribe(user => this.userId = user.uid);
  let cart = await this.cartService.getCart();
  cart.valueChanges().subscribe(
    
    result =>{

      for(let productId in result.items)
      {
        let id = parseInt(productId)
        console.log("we are in shopping-cart" + result.items[id].quantity);
         this.cartItems.push(result.items[id])
         this.Total = this.Total + (result.items[id].quantity * result.items[id].product.productPrice)
         console.log(this.Total);
        // if(this.cartItems.)
       }
     
       }
    )
  
  }
  shippingForm = new FormGroup({
    fName : new FormControl('' ,[Validators.required,Validators.minLength(3)]),
    lName : new FormControl('' ,[Validators.required,Validators.minLength(3)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    contactNo : new FormControl('' ,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    city : new FormControl('' ,Validators.required),
    address :  new FormControl('' ,Validators.required),
  
  });

  onSubmit()
  {
    console.log("formValue:" + this.shippingForm.value.fName);
    this.checkoutService.placeOrder(this.shippingForm,this.userId );
    this.router.navigate(['/order-success']); 
  }

  get fName()
  {
    return this.shippingForm.get('fName');
  }
  
  get lName()
  {
    return this.shippingForm.get('lName');
  }
  get email()
  {
    return this.shippingForm.get('email');
  }
  get contactNo()
  {
    return this.shippingForm.get('contactNo');
  }
  get city()
  {
    return this.shippingForm.get('city');
  }
  get address()
  {
    return this.shippingForm.get('address');
  }
}
