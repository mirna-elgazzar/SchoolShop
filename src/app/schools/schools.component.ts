import { Component, NgModule, VERSION,OnInit } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';
import { School } from './school';
import { SchoolsService } from './schools.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';


@Component({
  selector: 'app-schools',
  templateUrl: 'schools.component.html',
  styleUrls: ['./schools.component.css']
    
})
export class SchoolsComponent implements OnInit {

//initialize a demo SchoolsComponent
  selectedSchool: School;
  schools : School[];
  sort:string = "alphabet"; 
  ////----------filter variables-------------////
  name: string;
  searchText: string = "";
  selected_count: number = 0;
  selected_certificates = [];

  certificates = [
    {
      name: 'IGCSE',
      id: 1,
      selected: false
    },
    {
      name: 'IB',
      id: 2,
      selected: false
    },
    {
      name: 'BAC',
      id: 3,
      selected: false
    }, 
    {
      name: 'AMERICAN',
      id: 4,
      selected: false
    },
    {
      name: 'ABITUR',
      id: 5,
      selected: false
    }];

  constructor(private schoolsService: SchoolsService,private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient) {
          this.name = `Angular! v${VERSION.full}`;
          this.getSelected();
        }

  ngOnInit() {
    this.getSchools();
  }

  onSelect(school: School): void {
  this.selectedSchool = school;
  }
 
  getSchools(){
    this.schoolsService.getSchools(this.sort).subscribe(
                    (res: any) => {
                      this.schools = res.data;
                      console.log(this.schools)
                    },
                    (err: HttpErrorResponse) => {
                      console.log(err);
                    }
              );

  }

// Getting Selected Games and Count
  getSelected() {
    this.selected_certificates = this.certificates.filter(s => {
      return s.selected;
    });
    this.selected_count = this.selected_certificates.length;
    
  }

 
  // Clearing All Selections
  clearSelection() {
    this.searchText = "";
    this.certificates = this.certificates.filter(c => {
      c.selected = false;
      return true;
    });
    this.getSelected();
  }
 
  //Delete Single Listed Game Tag
  deleteGame(id: number) {
    this.searchText = "";
    this.certificates = this.certificates.filter(c => {
      if (c.id == id)
        c.selected = false;
 
      return true;
    });
    this.getSelected();
  }

clearFilter() {
    this.searchText = "";
  }


  sortingClicked(sort: string){
    this.sort = sort;
    this.getSchools();
  }

 


}


