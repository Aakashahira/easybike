import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-featured-used-bikes',
  templateUrl: './featured-used-bikes.component.html',
  styleUrls: ['./featured-used-bikes.component.css']
})
export class FeaturedUsedBikesComponent implements OnInit {

  
  featuredusedbikes : Observable<any>;
  productsArray = [];
  current_product;
  constructor(private router : Router, private db : AngularFireDatabase, private service : ProductsService, private cartService : ShoppingCartService) { }

  ngOnInit() {
    this.service.getFeaturedUsedBikes().subscribe(

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
    this.router.navigate(['usedbikesdescription',id])
  }
 
  
  showDealerDetails(item)
  {
    // console.log("hello world");
     console.log("show dealer details" + item);
    this.router.navigate(['usedbikesdescription',item]);
  }
}
