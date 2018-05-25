import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { FilterPipe } from './schools/filter.pipe';
//import { SortPipe } from './schools/sort.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './guards/AuthInterceptor';



import {SchoolsService} from './schools/schools.service';
import {SearchService} from './homepage/search/search.service';
import {SchoolPageService} from './schools/schoolPage/schoolPage.service';
import {UpdateService} from './layout/update.service';

import {StationaryPageService} from './stationary/stationaryPage/stationaryPage.service';
import {StationaryService} from './stationary/stationary.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule // AppRoutingModule is last
  ],
  providers: [UpdateService,AuthGuard, SchoolsService, SearchService, SchoolPageService, StationaryPageService,StationaryService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {}
