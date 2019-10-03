import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-view-new-bikes',
  templateUrl: './view-new-bikes.component.html',
  styleUrls: ['./view-new-bikes.component.css']
})
export class ViewNewBikesComponent implements OnInit {

  productsArray = [];
  constructor(private service : ProductsService) { }

  ngOnInit() {
    this.service.getAllFeaturedBikes().subscribe(
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
