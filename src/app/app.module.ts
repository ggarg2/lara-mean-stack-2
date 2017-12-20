import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CourseModule } from './dashboard/course/course.module';
import { HomeModule } from './home/home.module';
import { ContactUsModule } from './contact-us/contact-us.module';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:'contact-us', component: ContactUsComponent},
 // { path:'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DashboardModule,
    RouterModule.forRoot(routes),
    HomeModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
