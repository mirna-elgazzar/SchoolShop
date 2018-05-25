import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../../environments/environment';
import { School } from '../../schools/school';


@Injectable()
export class SearchService {
    private schools: School[] = [];

    constructor(private httpClient: HttpClient) { }

    getSchools(search: string) {
        return this.httpClient.get(`${environment.apiUrl}/search?`+search);
    }
}
