import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  menuItems: any = [
  {
    displayName: 'Home',
    url: '/home'
  },{
    displayName: 'Dashboard',
    url: '/dashboard'
  },
  {
    displayName: 'Contact us',
    url: '/contact-us'
  },
  {
    displayName: 'Signin',
    url: '/signin'
  },
  {
    displayName: 'Signup',
    url: '/signup'
  },
  {
    displayName: 'Policy',
    url: '/policy'
  }]

  logoData: any = {
    width: '122',
    height: '100',
    logoName: 'Mean Stack',
    logoUrl: '',
    logoImgPath: 'assets/image/1.png',
    class: 'header-class'
  }

  constructor() { }

  ngOnInit() {
  }

}
