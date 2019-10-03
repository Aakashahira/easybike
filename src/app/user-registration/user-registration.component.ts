import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private service : AuthService, private router : Router) { }

  ngOnInit() {
  }
  userSignup = new FormGroup({
    Name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    phone : new FormControl('',[Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(11)]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    type : new FormControl('user')
 });

 onSubmit()
 {
   console.log(this.userSignup.value);
   this.service.firebaseUserRegistration(this.userSignup).then
   {
     this.router.navigate(['login']);
   }
 }
 get Name()
 {
   return this.userSignup.get('Name');
 }
get phone()
{
  return this.userSignup.get('phone');
}
 get Email()
  {
    return this.userSignup.get('Email');
  }

  get password()
  {
    return this.userSignup.get('password');
  }

}
