import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { CheckOutService } from '../check-out.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  currentUser : string;
  productsArray = [];
  constructor(private fauth : AngularFireAuth,private cOutService : CheckOutService) { 
   this.currentUser =  this.fauth.auth.currentUser.uid;
  }

  ngOnInit() {
    this.currentUser =  this.fauth.auth.currentUser.uid;
    console.log("We are in myorder page");
      this.cOutService.getAllUserOrders(this.currentUser);
      this.cOutService.getAllUserOrders(this.currentUser).subscribe(
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
