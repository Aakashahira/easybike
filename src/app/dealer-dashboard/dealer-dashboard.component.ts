import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProductsService } from '../products.service';
import { delegateToClassInput } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.css']
})
export class DealerDashboardComponent implements OnInit {

  currentDealer : string;
  productsArray = [];
  constructor(private Afuth : AngularFireAuth,private pService : ProductsService) {
    this.currentDealer = Afuth.auth.currentUser.uid;
    console.log("dealer Id is:" + this.currentDealer);
   }

  ngOnInit() {
    this.currentDealer = this.Afuth.auth.currentUser.uid;
  this.pService.getAllDealerBikes(this.currentDealer);
      this.pService.getAllDealerBikes(this.currentDealer).subscribe(
        list=>{
          this.productsArray = list.map(item=>{
        
            return {
             
              ...item.payload.val()
            };
          });
        }
      //  console.log("length of array: " + this.productsArray);
        );

  }
  
deleteIt(bike)
{
console.log("we are in deleteIt" + bike.productID);
console.log("bike key:" + bike.$key);
this.pService.removeThisBike(bike);
}

}
