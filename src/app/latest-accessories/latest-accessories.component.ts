import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-latest-accessories',
  templateUrl: './latest-accessories.component.html',
  styleUrls: ['./latest-accessories.component.css']
})
export class LatestAccessoriesComponent implements OnInit {

  latestAccessories : Observable<any>
  acc  = [];
  productsArray = [];
  addProduct = false;
  current_product;

  constructor(private router : Router, private db : AngularFireDatabase, private service : ProductsService, private cartService : ShoppingCartService) { }

  ngOnInit() {
  
    this.service.getProducts().subscribe(

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
  addtocart(item)
 {
   this.service.myCurrentProducts(this.current_product);
  //  this.current_products.push(this.current_product);
    console.log(this.current_product.productName);
      this.addProduct = true;
 }
 adddtocart(item)
 {
  
    this.current_product = item;
    this.cartService.addToCart(item);
 }
  gotocart()
  {
    this.router.navigate(['myCart'])
  }
}
