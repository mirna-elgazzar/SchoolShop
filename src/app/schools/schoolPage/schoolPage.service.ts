import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { School } from '../school';
import {SchoolReview} from './schoolReview';
import { environment } from '../../../environments/environment';



interface ServerData {
  schools: School[];
}

@Injectable()
export class SchoolPageService {

  constructor(private httpClient: HttpClient) { }

  getSchoolInfo(schoolId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/`+ schoolId + '/getInfo', {headers: headers});
  }


  getReviews(schoolName){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/review/`+ schoolName , {headers: headers});
  }

  getAverage(schoolName){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/review/averageRating/`+ schoolName , {headers: headers});
  }

  analyzeRating(schoolName){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/review/analyzeRating/`+ schoolName , {headers: headers});
  }

  addFavorite(schoolId){
    
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.put(`${environment.apiUrl}/user/addFavorite/`+ schoolId , {headers: headers});
  }

  removeFavorite(schoolId){
    
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.delete(`${environment.apiUrl}/user/deleteFavorite/`+ schoolId , {headers: headers});
  }

  isFavorite(schoolId){
    
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.put(`${environment.apiUrl}/user/isFavorite/`+ schoolId , {headers: headers});
  }

  isReviewed(schoolId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/school/review/isReviewed/`+ schoolId , {headers: headers});
  }

//
  
   addReview(school_id, school_name, rating, comment, language, user_name){
    //Creates a JSON Object with the review passed to it, to use as a body for the post route
    let body = {
      school_id: school_id, 
      school_name: school_name,
      rating:rating,  //string
      comment:comment,
      language:language,
      user_name:user_name
    } 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(`${environment.apiUrl}/school/review/`+ school_id +`/add`,body,{headers: headers});
  }

  ///school/review/:schoolReviewId/edit

  editReview(schoolId, newRating, newComment){
      //Creates a JSON Object with the review passed to it, to use as a body for the post route
      let body = {
        rating:newRating,  //string
        comment:newComment
      } 
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.httpClient.put(`${environment.apiUrl}/school/review/`+ schoolId +`/edit`,body,{headers: headers});
    }


    getUserReview(schoolId){
      let headers = new HttpHeaders();
		  headers.append('Content-Type', 'application/json');
      return this.httpClient.get(`${environment.apiUrl}/school/review/userReview/`+ schoolId , {headers: headers});

    }



  addUserReview(school_id, school_name, rating, comment, language){
    //Creates a JSON Object with the review passed to it, to use as a body for the post route
    let body = {
      school_id: school_id, 
      school_name: school_name,
      rating:rating,  //string
      comment:comment,
      language:language,
      
    } 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(`${environment.apiUrl}/school/userReview/`+ school_id +`/add`,body,{headers: headers});
  }

  
  
  
    

}