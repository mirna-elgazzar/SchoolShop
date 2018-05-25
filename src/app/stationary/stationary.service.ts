import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Stationary } from './stationary';
import { environment } from '../../environments/environment';



interface ServerData {
  stationary: Stationary[];
}

@Injectable()
export class StationaryService {

  constructor(private httpClient: HttpClient) { }

getStationary() {
    return this.httpClient.get(`${environment.apiUrl}/stationary`);
  }

  getStationaryLocation(search: string) {
      return this.httpClient.get(`${environment.apiUrl}/stationary/location/search?`+search);
    }

}