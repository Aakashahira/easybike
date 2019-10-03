import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.css']
})
export class NavbaarComponent implements OnInit {
    
   user : Observable<any>
   name : any;
   profileArry ;
  a = false;
  constructor(private service : AuthService,private router : Router) {
  
   }

  ngOnInit() {
  }
  
  logout()
   {
     this.service.signOut();
     this.router.navigate(['home']);
   }
}
