import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HomepageService {
  constructor(private httpClient: HttpClient) {}

  sendMessage(email, name, message){
    let body = {
      name: name, 
      email: email,
      message:message
    }
    return this.httpClient.put('http://localhost:3000/api/user/sendEmail', body);
        
  }
}


 