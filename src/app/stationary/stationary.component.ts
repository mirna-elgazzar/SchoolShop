import { Component, NgModule, VERSION,OnInit } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';
import { Stationary } from './stationary';
import { StationaryService } from './stationary.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FilterPipe } from './filter.pipe';
//import { FilterPipe } from './filter.pipe';
 

@Component({
  selector: 'app-stationary',
  templateUrl: 'stationary.component.html',
  styleUrls: ['./stationary.component.css']
})
export class StationaryComponent implements OnInit {

  stationary : Stationary[];
  location:string = "";
  title:string = "";

    private pagingIndex: number[] = [];
    private pageNumber: number;
    private searchQuery: string;
    sort: string ="alphabet";

  
  ////----------filter variables-------------////
  name: string;
  searchText: string = "";
  selected_count: number = 0;
  selected_locations = [];

  locations = [
    {
      html:'Alexandria',
      name: 'Alexandria',
      id: 1,
      selected: false
    },
    {
      html:'Dokki',
      name: 'Dokki',
      id: 2,
      selected: false
    },
    {
      html:'Heliopolis',
      name: 'Heliopolis',
      id: 3,
      selected: false
    },
    {
      html:'Helwan',
      name: 'Helwan',
      id: 4,
      selected: false
    },
    {
      html:'Hurghada',
      name: 'Hurghada',
      id: 5,
      selected: false
    },
    {
      html:'Maadi',
      name: 'Maadi',
      id: 6,
      selected: false
    },
    {
      html:'Nasr City',
      name: 'Nasrcity',
      id: 7,
      selected: false
    },
    {
      html:'New cairo',
      name: 'Newcairo',
      id: 8,
      selected: false
    },
    {
      html:'Zamalek',
      name: 'Zamalek',
      id: 9,
      selected: false
    },
    {
      html:'6th October',
      name: 'October',
      id: 10,
      selected: false
    }];

  
  constructor(private stationaryService: StationaryService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) {
                 this.name = `Angular! v${VERSION.full}`;
                 this.getSelected();
             }

  ngOnInit() {
    this.initialize()
    //this.getStationary();
  }

  onSelect(stationary: Stationary): void {
  //this.selectedStationary = stationary;
  }
 
 
  initialize(){
    this.getQueryParams();
    this.search();
    /*console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe((params: Params) => {
            this.location = params['location'];
            console.log(this.location);
            this.stationaryService.getStationaryLocation(this.location).subscribe(
                    (res: any) => {
                      this.stationary = res.data;
                      this.title = res.msg;
                      console.log(this.stationary);
                      console.log(this.title);
                    },
                    (err: HttpErrorResponse) => {
                      console.log(err);
                    }
              );
    });*/
  }

// Getting Selected Games and Count
  getSelected() {
    this.selected_locations = this.locations.filter(s => {
      return s.selected;
    });
    this.selected_count = this.selected_locations.length;
    
    
  }

 
  // Clearing All Selections
  clearSelection() {
    this.searchText = "";
    this.locations = this.locations.filter(c => {
      c.selected = false;
      return true;
    });
    this.getSelected();
    
  }
 
  
  deleteGame(id: number) {
      
    this.searchText = "";
    this.locations = this.locations.filter(c => {
      if (c.id == id)
        c.selected = false;
 
      return true;
    });
    this.getSelected();
  }

clearFilter() {
    this.searchText = "";
    
  }

 search() {
    this.stationaryService.getStationaryLocation(this.searchQuery).subscribe(
                    (res: any) => {
                      this.stationary = res.data;
                      this.title = res.msg;
                      console.log(this.stationary);
                      console.log(this.title);
                    },
                    (err: HttpErrorResponse) => {
                      console.log(err);
                    }
              );

    }

    getQueryParams() {
      this.activatedRoute.params.subscribe((params: Params) => {
            this.location = params['location'];
            this.searchQuery = "location=" + params['location'];
            this.searchQuery = this.searchQuery + "&&sort=" + this.sort;
            console.log(this.location);
            console.log(this.searchQuery);

      });
    }


    updateSortQuery(sortValue: string) {
        this.sort = sortValue;
        this.getQueryParams();
        this.search();
    }

    nextPage() {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber + 1 || 1 } });
    }

    previousPage() {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber - 1 || 1 } });
    }


}


