import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from "@angular/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { StationaryComponent } from './stationary.component';
import { StationaryPageComponent } from './stationaryPage/stationaryPage.component';
//import { StationaryLocationComponent } from './stationaryLocation/stationaryLocation.component';

import { StationaryRoutingModule } from './stationary-routing.module';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [NgbModule,CommonModule, HttpModule, Ng2SearchPipeModule,FormsModule,CommonModule, StationaryRoutingModule],
  declarations: [ FilterPipe,StationaryComponent, StationaryPageComponent],
  exports:[FilterPipe]
})
export class StationaryModule {} 
  