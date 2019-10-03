import { Injectable, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCartItem } from './Models/shopping-cart-items';
import { AngularFireDatabase } from 'angularfire2/database';
import { async } from 'q';
import { Product } from './Models/product.Model';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  subscription : Subscription;
  Total; 
  cartItems : ShoppingCartItem[];
  myOrders;
  constructor(private cartService : ShoppingCartService, private db : AngularFireDatabase) {
// console.log("we are in constructor");
this.Total = 0;
this.cartItems = [];

  this.storeOrder();
        
   }

  async storeOrder()
  {
    let cart = await this.cartService.getCart();
    this.subscription = await cart.valueChanges().subscribe(
    result => {
 
       for(let productId in result.items)
       {
         let id = parseInt(productId)
         console.log("we are in ssshopping-cart" + result.items[id].quantity);
          this.cartItems.push(result.items[id])
          this.Total = this.Total + (result.items[id].quantity * result.items[id].product.productPrice)
          console.log("Total is" + this.Total);

       } })
  }
  async placeOrder(shippingForm,userId) 
{

await this.storeOrder().then ( async()=>{
 
  await this.db.list('orders').push({
    dateCreated : new Date().getTime(),
    shipping : {
      fName  : shippingForm.value.fName,
      lName  : shippingForm.value.lName,
      email : shippingForm.value.email,
      contactNo: shippingForm.value.contactNo,
      city : shippingForm.value.city,
      address :shippingForm.value.address,
       
              },
            items : this.cartItems.map(i => {
            return({ product : i.product,
              quantity : i.quantity
             })}),
           
  total : this.Total,
    user : userId
 }).then(async()=>{ 
  
await this.cartService.clearShoppingCart();
   this.cartItems.length = 0;
   this.Total =0;
 }
 )

}).catch(err => console.log("there is error" + err));
//   console.log("value of a" .+ a);

 
   
     }

     getAllUserOrders(User : string)
     {
      return this.db.list('orders',ref => ref.orderByChild('user').equalTo(User)).snapshotChanges()
     }

     getAllOrders()
     {
       return this.db.list('orders').snapshotChanges();
     }
}
