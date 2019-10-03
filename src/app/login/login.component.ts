import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import {Profile} from '../Models/profile.model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ProfileArray  : Profile[];
  profileName;
  imAdmin = false;
  returnUrl : string = null;
  constructor(private service : AuthService, private Afuth : AngularFireAuth, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  
  }
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl('', [Validators.required,Validators.minLength(8)])
  });
  onSubmit()
  {
    console.log(this.loginForm.value);
    this.service.firebaseUserLogin(this.loginForm).then(
      ()=> {
        this.service.getUserProfile().subscribe(data=>{
          console.log("we are in login");
            this.ProfileArray = data;
            console.log(this.ProfileArray);
            if(this.ProfileArray == null)
            {
              console.log("user is blocked");
              this.Afuth.auth.signOut();
            }
            else if(this.ProfileArray[0].type == "admin")
            {
              console.log("congratz you are admin")
              this.imAdmin = true; 
              this.router.navigate(['adminpanel']);
                  
            }
            else if(this.ProfileArray[0].type == "user"){
              console.log("you are user");
              console.log("Name " + this.ProfileArray[0].name);
              if(this.returnUrl == null)
              {
                this.router.navigate(['home']);
              }
              // this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
            else{ this.router.navigate([this.returnUrl]);}
            }
            else if(this.ProfileArray[0].type == "dealer")
            {
              console.log("you are dealer");
              console.log("Name of dealer is" + this.ProfileArray[0].name);
              this.router.navigate(['dealerManageBikes']);
            }
            this.profileName = this.ProfileArray[0].name;
        })
      }
    ).catch(
      err => console.log(err)
    )
  }

  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

}

