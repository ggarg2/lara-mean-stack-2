import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './header/menu/menu.component';
import { LogoComponent } from './header/logo/logo.component';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuComponent, LogoComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
