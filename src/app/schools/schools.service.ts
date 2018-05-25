import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { School } from './school';
import { environment } from '../../environments/environment';



interface ServerData {
  schools: School[];
}

@Injectable()
export class SchoolsService {

  constructor(private httpClient: HttpClient) { }

getSchools(sort) {
    return this.httpClient.get(`${environment.apiUrl}/schools/sort/`+sort);
  }

}