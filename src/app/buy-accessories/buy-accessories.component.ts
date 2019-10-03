import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.Model';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-buy-accessories',
  templateUrl: './buy-accessories.component.html',
  styleUrls: ['./buy-accessories.component.css']
})
export class BuyAccessoriesComponent implements OnInit {

  accessories : Observable<any>
  productsArray = [];
  constructor(private router : Router, private db : AngularFireDatabase, private service : ProductsService, private cartService : ShoppingCartService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(

      list=>{
        this.productsArray = list.map(item=>{
      
          return {
           
            ...item.payload.val()
          };
        });
      });
  }
  onClick(id)
  {
    console.log(id);
    this.router.navigate(['accessoriesdescripton',id])
  }
  adddtocart(item)
 {
  
    // this.current_product = item;
    this.cartService.addToCart(item);
 }
 gotocart()
  {
    this.router.navigate(['myCart'])
  }


}
