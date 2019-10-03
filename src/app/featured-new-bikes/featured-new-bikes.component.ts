import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-featured-new-bikes',
  templateUrl: './featured-new-bikes.component.html',
  styleUrls: ['./featured-new-bikes.component.css']
})
export class FeaturedNewBikesComponent implements OnInit {

  featurednewbikes : Observable<any>;
  productsArray = [];
  current_product;
  constructor(private router : Router, private db : AngularFireDatabase, private service : ProductsService, private cartService : ShoppingCartService) { }

  ngOnInit() {

    this.service.getFeaturedBikes().subscribe(

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
    this.router.navigate(['newbikesdescription',id])
  }
 
  
  showDealerDetails(item)
  {
    // console.log("hello world");
     console.log("show dealer details" + item);
    this.router.navigate(['newbikesdescription',item]);
  }
}
