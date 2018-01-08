import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    // const authHeader = this.auth.getAuthorizationHeader();
    // // Clone the request to add the new header.
    // const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    // Pass on the cloned request instead of the original request.

    console.log("inside interceptor")
    console.log(req.url)

    const newUrl = req.url + "?auth="+this.auth.token;

    const authReq = req.clone({url: newUrl});
    const started = Date.now();
    return next.handle(authReq)
    .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.url} took ${elapsed} ms.`);
        }
      },
      error => {
        if(error.status == 401){
            // Navigate to login page
            console.log("401 error");
            this.logout();
          }

        if(error.status == 403){
          // Navigate to login page
          console.log("403 error");
          
          this.logout();
         }
      }
    );
  }

  private logout(){
    this.auth.logout();
    this.auth.userLoggedInEventEmitter.emit(false);
    this.router.navigate(["login"]);
  }
}