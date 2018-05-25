import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Stationary } from '../stationary';
import { environment } from '../../../environments/environment';


interface ServerData {
  stationary: Stationary[];
}

@Injectable()
export class StationaryPageService {

  constructor(private httpClient: HttpClient) { }

  getStatioaryInfo(stationaryId){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/stationary/`+ stationaryId + '/getInfo', {headers: headers});
  }

  getReviews(stationeryName){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/stationary/review/`+ stationeryName , {headers: headers});
  }

  getAverage(stationeryName){
    let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.apiUrl}/stationary/review/averageRating/`+ stationeryName , {headers: headers});
  }

}