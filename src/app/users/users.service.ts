import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from './user';
import * as moment from "moment";
import 'rxjs/Rx';
@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers() { 
    return this.httpClient.get(`${environment.apiUrl}/users`);
  }

   signUp(user: User) {
        //Creates a JSON Object with the user passed to it, to use as a body for the post route
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //Adds a header to indicate that the body is a JSON object to pass to the register post route
        return this.httpClient.post('http://localhost:3000/api/user/register', body, { headers: headers })
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    login(email, password){
    let body = {
      email: email, 
      password: password
    }
    return this.httpClient.post('http://localhost:3000/api/user/login', body)
        .map((response: Response) => response)
        .catch((error: Response) => Observable.throw(error));
  }



  public isLoggedIn() {
    if (localStorage.getItem("id_token")){
      return moment().isBefore(this.getExpiration()); //is the current time before expiration time?
    }
    return false;
        
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }  

    getCurrentUser(){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/currentUser`, {headers: headers});
  } 

   getOneUser(userId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/user/profile/`+ userId, {headers: headers});
  }

  getReviews(userId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/review/user/`+ userId , {headers: headers});
  }
  
   deleteReview(reviewId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.delete(`${environment.apiUrl}/school/review/`+ reviewId+'/delete' , {headers: headers});
  }
   getSchoolInfo(schoolId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/`+ schoolId + '/getInfo', {headers: headers});
  }
  
  removeFavorite(schoolId){
    
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.delete(`${environment.apiUrl}/user/deleteFavorite/`+ schoolId , {headers: headers});
  }

  /*getFavorites(userId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/review/`+ schoolName , {headers: headers});
  }
*/
}
