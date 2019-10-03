import { Component, OnInit } from '@angular/core';
import { CheckOutService } from 'src/app/check-out.service';
import { ShoppingCartItem } from 'src/app/Models/shopping-cart-items';

@Component({
  selector: 'app-admin-view-orders',
  templateUrl: './admin-view-orders.component.html',
  styleUrls: ['./admin-view-orders.component.css']
})
export class AdminViewOrdersComponent implements OnInit {
 
  productsArray = [];
  cartItems : ShoppingCartItem[]= [];
  constructor(private  service : CheckOutService) { }

  ngOnInit() {
    this.service.getAllOrders().subscribe(
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
