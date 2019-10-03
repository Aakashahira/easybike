import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductsService } from '../products.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-new-bikes-description',
  templateUrl: './new-bikes-description.component.html',
  styleUrls: ['./new-bikes-description.component.css']
})
export class NewBikesDescriptionComponent implements OnInit {

  descriptionId;
  productDescription : Observable<any>
  product = [];
  dealerId;
  ID;
  dealerName;
  dealer;
  dealerDetails = [];
  constructor(private route : ActivatedRoute, private router : Router,private pService : ProductsService,private authService : AuthService,private db : AngularFireDatabase) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) =>
    {
      let id = (params.get('id'));
         this.descriptionId = id;
      console.log("id is" + id);
      console.log("description id is" + this.descriptionId);
      this.productDescription = this.pService.getBikeDetails(this.descriptionId);
       this.pService.getBikeDetails(this.descriptionId).subscribe(
        list=>{
          this.product = list.map(item=>{
    
            return {
              ...item.payload.val(),
              
            };
          });
        });
      this.pService.getBikeDetails(this.descriptionId).subscribe(
       data => {
        this.dealerId = data.map(item => item.payload.child('dealerId').val());
        console.log("dealer Id is:" + this.dealerId);
        let id = this.dealerId.toString();
        this.dealer = this.db.list('users/'+id).snapshotChanges().subscribe(
          data => {
            this.dealerDetails = data.map(item=>{
    
              return {
                ...item.payload.val(),
                
              };
            });
            // this.dealerName = data.map(item => item.payload.child('name').val());
            // console.log("dealer Name is:" + this.dealerName);
     
          })
       });        
        })
      
 
  }

}
