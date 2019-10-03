import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-accessories-description',
  templateUrl: './accessories-description.component.html',
  styleUrls: ['./accessories-description.component.css']
})
export class AccessoriesDescriptionComponent implements OnInit {

     descriptionId;
     productDescription : Observable<any>
     product = [];
  constructor(private route : ActivatedRoute, private router : Router,private pService : ProductsService, private cartService : ShoppingCartService) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) =>
    {
      let id = (params.get('id'));
         this.descriptionId = id;
      console.log("id is" + id);
      console.log("description id is" + this.descriptionId);
      this.productDescription = this.pService.getProductDetails(this.descriptionId);
       this.pService.getProductDetails(this.descriptionId).subscribe(
        list=>{
          this.product = list.map(item=>{
    
            return {
              ...item.payload.val()
            };
          });
        });
      
      
  });

  }

  goToCart(product)
  {
    this.cartService.addToCart(product);
    this.router.navigate(['myCart']);
  }

  
   
}
