import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }
  logOut()
  {
this.authService.signOut();
// this.router.navigate(['home']);
  }

}
