import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-admin-view-accessories',
  templateUrl: './admin-view-accessories.component.html',
  styleUrls: ['./admin-view-accessories.component.css']
})
export class AdminViewAccessoriesComponent implements OnInit {
  productsArray = [];
  constructor(private pService : ProductsService) { }

  ngOnInit() {
     this.pService.getAllProducts().subscribe(
      list=>{
        this.productsArray = list.map(item=>{
      
          return {
           
            ...item.payload.val()
          };
        });
      }
     )
  }

}
