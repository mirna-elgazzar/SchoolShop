import { Observable } from 'rxjs/Rx';
import { Pipe, PipeTransform } from '@angular/core';
import { Component, NgModule, VERSION,OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
//import { FilterPipe } from '../../../schools/filter.pipe';
import { FilterPipe } from './filter.pipe';

import { SearchService } from '../search.service';
import { School } from '../../../schools/school';


@Component({
    selector: 'homepage-search-result',
    templateUrl: './searchResult.component.html',
    styleUrls: ['./searchResult.component.css']
})
export class SearchResultComponent implements OnInit {
    pageTitle: string = "";
    private schools: School[] = [];
    private temp: Observable<School[]>;
    private sliced: School[] = [];
    private pagingIndex: number[] = [];
    private pageNumber: number;
    private searchQuery: string;
    private sort: string = "alphabet"
    private searchResult:string;

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

    constructor(private searchService: SearchService,
     private route: ActivatedRoute,
      private router: Router) { 
          this.name = `Angular! v${VERSION.full}`;
          this.getSelected();
      }

    ngOnInit() {
        //console.log("here");
        this.getQueryParams();
        this.search();
    }


    search() {
        this.searchService.getSchools(this.searchQuery).subscribe(
        (res: any) => {
            this.schools = res.data;
            this.pageTitle = res.msg;
            this.sliced = this.schools.slice(this.pageNumber - 1, this.pageNumber * 16 + 15);
            this.pagingIndex = new Array(Math.ceil(this.schools.length / 16));
            console.log(this.schools)
        },
        (err: HttpErrorResponse) => {
            console.log(err);
        }
        );
    }
    getQueryParams() {
        this.route
            .queryParams
            .subscribe(params => {
                this.pageNumber = +params['page'];
                this.searchResult = params['result'];

                if (!this.searchResult) {
                    this.searchResult = "location=" + params['location'];
                }
                else
                    this.searchResult = "result=" + this.searchResult;
                    
                this.searchQuery = this.searchResult + "&&sort=" + this.sort;
                console.log(this.searchQuery);
            })
    }

    updateSortQuery(sortValue: string) {
        console.log("SORRTT!!");
        this.sort = sortValue;
        console.log(this.searchResult);
        this.searchQuery = this.searchResult+"&&sort=" + this.sort;
        console.log(this.searchQuery);

        this.search();
    }

    nextPage() {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber + 1 || 1 } });
    }

    previousPage() {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber - 1 || 1 } });
    }

    getSelected() {
        this.selected_certificates = this.certificates.filter(s => {
        return s.selected;
        });
        this.selected_count = this.selected_certificates.length;
    
    }



    updateSearch(searchValue: string) {
        this.pageTitle = "Search Results";
            this.searchResult = searchValue;

            if (this.searchResult) {
                this.searchResult = "result=" + this.searchResult;
                this.searchQuery = this.searchResult+"&&sort=" + this.sort;
                this.search();
            }
                    
            
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

    }
