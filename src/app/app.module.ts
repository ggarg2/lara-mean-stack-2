import { AuthGuardService } from './auth-guard.service';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseModule } from './dashboard/course/course.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth-interceptor.service';


const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path:'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path:'contact-us', loadChildren: 'app/contact-us/contact-us.module#ContactUsModule'},
  
  { path:'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', 
    //canActivate: [AuthGuardService]
  },
  
    { path:'login', loadChildren: 'app/login/login.module#LoginModule'},
  { path:'signup', loadChildren: 'app/signup/signup.module#SignupModule'},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
