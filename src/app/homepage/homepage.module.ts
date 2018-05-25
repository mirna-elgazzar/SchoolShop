import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { HomepageComponent } from './homepage.component';
import { SearchComponent } from './search/search.component';
import {SearchResultComponent} from './search/searchResult/searchResult.component'


import { HomepageService } from './homepage.service';
import { SearchService } from './search/search.service';

import { HomepageRoutingModule } from './homepage-routing.module';
import { FilterPipe } from './search/searchResult/filter.pipe';

@NgModule({
  imports: [NgbModule,CommonModule, Ng2SearchPipeModule,HomepageRoutingModule,FormsModule],
  declarations: [HomepageComponent,SearchComponent, SearchResultComponent,FilterPipe],
  exports:[FilterPipe],
  providers: [HomepageService]
})
export class HomepageModule {}
