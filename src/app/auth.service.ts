import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { DealerRegistrationComponent } from './dealer-registration/dealer-registration.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  a = true;
  isLogin = false;
  name : any;
  type :any = "user";
  userProfile : Observable<any>
  user : firebase.User;
  userRegistration : AngularFireList<any>;
  dealer : Observable<any>;
  dealerRegistrationList;
  constructor(private db : AngularFireDatabase, private afuth : AngularFireAuth) {
    afuth.authState.subscribe(user => this.user = user);
   }

   firebaseUserRegistration(form)
   {
   return this.afuth.auth.createUserWithEmailAndPassword(form.value.Email,form.value.password)
      .then(()=>{
       //  data => console.log(data),
      this.userRegistration = this.db.list('users/' + this.afuth.auth.currentUser.uid);
         this.userRegistration.push(
            {
             name : form.value.Name,
             email : form.value.Email,
             phone : form.value.phone,
             password : form.value.password,
             type : form.value.type
 
            });
          }
      //   this.firebaseUserRegistration  
      )
   }
   
   firebaseUserLogin(loginForm)
   {
    return this.afuth.auth.signInWithEmailAndPassword(loginForm.value.email,loginForm.value.password)
      .then(()=>{
      console.log("Firebase login"),
       this.getUserProfile();
      
         this.getUserProfile().subscribe(
           data => { this.name = data.map(
             da => da.name
              )
               }
         )
         this.getUserProfile().subscribe(
           data => { this.type = data.map(
             da => da.type
              )
               }
         )
 
      
      }
 
      ).catch(
        err => {console.log("error" + err)
        alert("Username or password is incorrect.. Plz try Again")
      }
      )
   }
  getUserProfile() : Observable<any>   
   {
    console.log("current User" + this.afuth.auth.currentUser.uid);
          this.userRegistration  =  this.db.list('users/' + this.afuth.auth.currentUser.uid)
         
       this.userProfile = this.userRegistration.valueChanges();
     
    return this.userRegistration.valueChanges();
 }
 signOut()
{
  this.afuth.auth.signOut();
}
dealerRegistration(dealerForm)
{
 return this.afuth.auth.createUserWithEmailAndPassword(dealerForm.value.Email,dealerForm.value.password)
      .then( ()=> {
         this.dealerRegistrationList = this.db.list('users/'+ this.afuth.auth.currentUser.uid).push(
           {
            name : dealerForm.value.Name,
            email: dealerForm.value.Email,
            phone : dealerForm.value.phone,
            password : dealerForm.value.password,
            shopName : dealerForm.value.shopName,
            bikeBrand :dealerForm.value.bikeBrand,
            Address : dealerForm.value.Address,
            type :    dealerForm.value.type
           })

      }).catch(err => console.log(err));
}
getDealerDetails(dealerId)
{
 let id = dealerId.toString();
return this.dealer = this.db.list('users', ref => ref.orderByChild('dealerId').equalTo(id)).snapshotChanges();
}
getAllDealers()
{
 return this.db.list('users',ref => ref.orderByChild('type').equalTo('dealer')).snapshotChanges();
}

}
