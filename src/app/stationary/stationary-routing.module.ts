import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationaryComponent } from './stationary.component';
import {StationaryPageComponent} from './stationaryPage/stationaryPage.component';
//import {StationaryLocationComponent} from './stationaryLocation/stationaryLocation.component';


const routes: Routes = [
 
  { path: '', component: StationaryComponent, pathMatch: 'full' },
  { path: 'location/:location', component: StationaryComponent},
  { path: 'stationaryPage/:stationaryId', component: StationaryPageComponent} //stationary/stationaryPage/:stationaryId
  //{ path: 'location/:location', component: StationaryLocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationaryRoutingModule {}
