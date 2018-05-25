import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpInterceptor,HttpRequest, HttpHandler,HttpEvent,HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import {Router, ActivatedRoute, Params} from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     
       //retrieve the JWT string from Local Storage directly
        const idToken = localStorage.getItem("id_token");

        //check if the JWT is present
        //if the JWT is present, then we will clone the HTTP headers,
          //and add an extra Authorization header, which will contain the JWT:
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("authorization",
                     idToken)
            });
            return next.handle(cloned).catch(
                (err: HttpErrorResponse) => {
                    if (err.status === 401) {
                        this.router.navigate(['/users/login']);
                        localStorage.clear();
                    }
                    return Observable.throw(err);
                }
            );
        }

        //if the JWT is not present, then the request goes through to the server unmodified
        else {
            return next.handle(req).catch(
                (err: HttpErrorResponse) => {
                    if (err.status === 401) {
                        this.router.navigate(['/users/login']);
                        localStorage.clear();
                    }
                    return Observable.throw(err);
                }
            );
        }
    }
}

/*the JWT that was initially created on the server,
 is now being sent with each request to the Application server. */