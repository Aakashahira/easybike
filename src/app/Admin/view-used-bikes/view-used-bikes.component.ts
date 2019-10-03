import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-view-used-bikes',
  templateUrl: './view-used-bikes.component.html',
  styleUrls: ['./view-used-bikes.component.css']
})
export class ViewUsedBikesComponent implements OnInit {

     productsArray = [];
  constructor(private service : ProductsService) { }

  ngOnInit() {
    this.service.getAllFeaturedUsedBikes().subscribe(
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
