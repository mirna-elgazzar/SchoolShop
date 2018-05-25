import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class HomepageService {
  constructor(private httpClient: HttpClient) {}

  sendMessage(email, name, message){
    let body = {
      name: name, 
      email: email,
      message:message
    }
    return this.httpClient.put(`${environment.apiUrl}/user/sendEmail`, body);

    
        
  }
}


 