import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-view-dealers',
  templateUrl: './admin-view-dealers.component.html',
  styleUrls: ['./admin-view-dealers.component.css']
})
export class AdminViewDealersComponent implements OnInit {

  productsArray;
  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService.getAllDealers().subscribe(
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
