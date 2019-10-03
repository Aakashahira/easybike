import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-used-bikes',
  templateUrl: './used-bikes.component.html',
  styleUrls: ['./used-bikes.component.css']
})
export class UsedBikesComponent implements OnInit {

  productsArray = [];
  constructor(private router : Router, private db : AngularFireDatabase, private service : ProductsService, private cartService : ShoppingCartService) { }

  ngOnInit() {
    this.service.getAllFeaturedUsedBikes().subscribe(

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
