import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {

  user : firebase.User;
  constructor(private router : Router,private auth : AngularFireAuth) {}
 async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  await this.auth.authState.subscribe(
     user => this.user = user,
     )
   if(this.user)
   {
    console.log("t"+ this.user.uid);
    return true;
   
   }
  else{
    this.router.navigate(['/login'],{queryParams: {returnUrl : state.url}});
    console.log("you need to login first");
    return false
  }
  
  }
}
