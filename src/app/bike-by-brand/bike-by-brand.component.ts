import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-bike-by-brand',
  templateUrl: './bike-by-brand.component.html',
  styleUrls: ['./bike-by-brand.component.css']
})
export class BikeByBrandComponent implements OnInit {

  brandBikes;
  productsArray = [];
  current_product;
  constructor(private route : ActivatedRoute,private router : Router, private db : AngularFireDatabase, private service : ProductsService, private cartService : ShoppingCartService) { }
    brandId;
  ngOnInit() {
      this.route.paramMap.subscribe((params : ParamMap)=>
      {
        let id = (params.get('id'));
         this.brandId = id;
         console.log("id is" + id);
         this.brandBikes = this.service.getSelectedBrandBikes(this.brandId);
         this.service.getSelectedBrandBikes(this.brandId).snapshotChanges().subscribe(
          list=>{
            this.productsArray = list.map(item=>{
          
              return {
               
                ...item.payload.val()
              };
            });
          });
      })

 
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


