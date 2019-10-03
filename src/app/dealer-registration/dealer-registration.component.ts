import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-registration',
  templateUrl: './dealer-registration.component.html',
  styleUrls: ['./dealer-registration.component.css']
})
export class DealerRegistrationComponent implements OnInit {

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit() {
  }
  dealerSignup = new FormGroup({
    Name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    phone : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    shopName : new FormControl('',Validators.required),
    bikeBrand : new FormControl('',Validators.required),
    Address : new FormControl('',Validators.required),
    type : new FormControl('dealer')
 });

 onSubmit()
 {
   console.log(this.dealerSignup.value);
   this.authService.dealerRegistration(this.dealerSignup).then(()=>
    { alert("Registration successfuly");
    this.router.navigate(['login']);
      
  }
   ).catch(()=>
    { alert("Registration Failed..This Email is already Registered") }
   )
 }

 get Name()
 {
   return this.dealerSignup.get('Name');
 }
 get Email()
 {
   return this.dealerSignup.get('Email');
 }
 get phone()
 {
   return this.dealerSignup.get('phone');
 }
 get password()
 {
   return this.dealerSignup.get('password');
 }
 get shopName()
 {
   return this.dealerSignup.get('shopName');
 }
 get bikeBrand()
 {
   return this.dealerSignup.get('bikeBrand');
 }
 
 get Address()
 {
   return this.dealerSignup.get('Address');
 }
}
