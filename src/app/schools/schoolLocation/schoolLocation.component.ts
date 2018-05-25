import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolsService } from '../schools.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-school-location',
  templateUrl: 'schoolLocation.component.html'
})
export class SchoolLocationComponent implements OnInit {

//initialize a demo SchoolsComponent
 
  location:String = "";
  decodedLocation:String = "";

  constructor(private schoolsService: SchoolsService,private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient) {}

  ngOnInit() {
    this.getSchools();
  }

  getSchools(){
     this.activatedRoute.params.subscribe((params: Params) => { 

            this.location = params['location'];
            this.decodedLocation = params['location'].replace(/-/g, ' '); //replace "-" with space
            this.router.navigate(['/home/search'], { queryParams: { location: this.decodedLocation, page: "1" } });
          
        });
  
  }


}


