import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = this.authService.isAuthenticated();

  menuItems: any = [
  {
    displayName: 'Home',
    url: '/home',
    isVisible: true      
  },{
    displayName: 'Dashboard',
    url: '/dashboard',
    isVisible: this.isUserLoggedIn,
    isAuthenticationNeeded: true
  },
  {
    displayName: 'Contact us',
    url: '/contact-us',
    isVisible: true
  },
  {
    displayName: 'Sign-in',
    url: '/login',
    isVisible: !this.isUserLoggedIn,
    isAuthenticationNeeded: false   
  },
  {
    displayName: 'Sign-up',
    url: '/signup',
    isVisible: !this.isUserLoggedIn,
    isAuthenticationNeeded: false    
  },
  {
    displayName: 'Logout',
    url: '',
    isVisible: this.isUserLoggedIn,
    isAuthenticationNeeded: true    
  },
  {
    displayName: 'Policy',
    url: '/policy',
    isVisible: true    
  }]

  logoData: any = {
    width: '122',
    height: '100',
    logoName: 'Mean Stack',
    logoUrl: '',
    logoImgPath: 'assets/image/1.png',
    class: 'header-class'
  }

  constructor(private authService: AuthService) {

    this.authService.userLoggedInEventEmitter.subscribe(
      data=>{
        console.log("User is loggedin successfully")
        this.isUserLoggedIn = data;
        if(data == true){
          for(let i =0; i< this.menuItems.length; i++)  {
            if(this.menuItems[i].isAuthenticationNeeded != undefined)
            this.menuItems[i].isVisible = this.menuItems[i].isAuthenticationNeeded;
          }
        }else{
          for(let i =0; i< this.menuItems.length; i++)  {
            if(this.menuItems[i].isAuthenticationNeeded != undefined)
            this.menuItems[i].isVisible = !this.menuItems[i].isAuthenticationNeeded;
          }
        }
      },
      error =>{
        console.log("user logged in event is failed")        
      }
    )

   }

  ngOnInit() {
  }

}
