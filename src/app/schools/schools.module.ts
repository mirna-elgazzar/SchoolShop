import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from "@angular/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SchoolsComponent } from './schools.component';
import { SchoolPageComponent } from './schoolPage/schoolPage.component';
import { SchoolLocationComponent } from './schoolLocation/schoolLocation.component';

import { SchoolsRoutingModule } from './schools-routing.module';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FilterPipe } from './filter.pipe';



@NgModule({
  imports: [NgbModule,CommonModule, HttpModule, Ng2SearchPipeModule,FormsModule,CommonModule, SchoolsRoutingModule],
  declarations: [SchoolsComponent, SchoolPageComponent,SchoolLocationComponent,FilterPipe ],
  exports:[FilterPipe]
  //providers: [UsersService]
})
export class SchoolsModule {}
 