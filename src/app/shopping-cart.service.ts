import { Injectable } from '@angular/core';
import { AngularFireDatabase, listChanges, AngularFireAction, DatabaseSnapshot, AngularFireObject } from 'angularfire2/database';
import { take,map } from 'rxjs/operators'
import {Product} from './Models/product.Model'
import { Observable, pipe, Subscription } from 'rxjs';
import { ShoppingCarts } from './Models/shopping-carts';
import { ShoppingCartItem } from './Models/shopping-cart-items'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  Total = 0; 
  cartItems : ShoppingCartItem[]= [];
  current;
  subscription : Subscription
  constructor(private db : AngularFireDatabase, private router : Router) { 
  }

  private create()
  {
  return  this.db.list('shopping-carts').push({
   dateCreated : new Date().getTime()
    });
  }

  async getCart() : Promise<AngularFireObject<ShoppingCarts>>
  { 
    let cartId = await this.getOrCreateId();
     return this.db.object('shopping-carts/' + cartId);
  }

   async getOrCreateId() : Promise<string>
  {
    let cartId = localStorage.getItem('cartId');
      
    if(cartId) return cartId;

    else 
    {
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
    } 
 
  }


  async addToCart(product : Product)
  {
  
      let cart = await this.getOrCreateId();
      let item$ = this.db.object('shopping-carts/' + cart + '/items/' + product.productID).snapshotChanges();
      item$.pipe(take(1)).subscribe(item => {
        if(item.payload.exists()){
        this.db.object('shopping-carts/' + cart + '/items/' + product.productID).update({
            quantity : parseInt(item.payload.child("quantity").val()) + 1
                          
         })
        // console.log("we are in if part");
      }
      else {
        this.db.object('shopping-carts/' + cart + '/items/' + product.productID).set(
          {
            product : product, quantity : 1
          }
        )
      }
      })

  }
async removeItemFromcart(product)
  {
    
    let cart = await this.getOrCreateId();
    let item$ = this.db.object('shopping-carts/' + cart + '/items/' + product.productID).snapshotChanges();
    item$.pipe(take(1)).subscribe(item => {
      
      this.db.object('shopping-carts/' + cart + '/items/' + product.productID).update({
         quantity : parseInt(item.payload.child("quantity").val()) - 1,
       })
    
  })
}
async clearShoppingCart()
{
  let cartId = await this.getOrCreateId();
  console.log("items are removed from cart");
 await this.db.object('shopping-carts/' + cartId + '/items').remove();
}
async removeSelectedItem(productId)
{
  let cartId = await this.getOrCreateId();
  console.log("fun() remove selected items");
  await this.db.object('shopping-carts/'+ cartId + '/items/' + productId.productID).remove();
}
 

    
    }
