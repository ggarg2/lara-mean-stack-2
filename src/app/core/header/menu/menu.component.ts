import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('items') items: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.authService.userLoggedInEventEmitter.emit(false);
    this.router.navigate(["login"]);
  } 

}
