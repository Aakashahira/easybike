import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../Models/shopping-cart-items';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
   Total = 0; 
  cartItems : ShoppingCartItem[]= [];
  
//  cart : Observable<any>
  constructor(private cartService : ShoppingCartService) {
    
   }

  async ngOnInit() {
    
   
  // let cart = await this.cartService.getCart();
  //    cart.valueChanges().subscribe(
       
  //      result =>{

  //        for(let productId in result.items)
  //        {
  //          let id = parseInt(productId)
  //          console.log("we are in shopping-cart" + result.items[id].quantity);
  //           this.cartItems.push(result.items[id])
  //           this.Total = this.Total + (result.items[id].quantity * result.items[id].product.productPrice)
  //           console.log(this.Total);
  //          // if(this.cartItems.)
  //         }
        
  //         }
  //      )

        this.sCart();
}

  async sCart()
    {
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
 increasCart(product)
 {
      this.Total = 0;
     this.cartItems.length = 0;
    this.cartService.addToCart(product);
 }
 decreaseCart(product)
 {
   this.Total = 0;
   this.cartItems.length = 0;
   this.cartService.removeItemFromcart(product)
 }
 removeItem(productId)
 {
   console.log("you press delete button");
   console.log("poductId" + productId);
   this.Total = 0;
   this.cartItems.length = 0;
   this.cartService.removeSelectedItem(productId);
  
 }

}
