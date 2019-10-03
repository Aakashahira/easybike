import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-bike-by-brand',
  templateUrl: './buy-bike-by-brand.component.html',
  styleUrls: ['./buy-bike-by-brand.component.css']
})
export class BuyBikeByBrandComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  onClick(brand)
  {
    // console.log("brand is" + brand);
    this.router.navigate(['newbikes',brand]);
  }
}
