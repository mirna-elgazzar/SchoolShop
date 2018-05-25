import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsComponent } from './schools.component';
import {SchoolPageComponent} from './schoolPage/schoolPage.component';
import {SchoolLocationComponent} from './schoolLocation/schoolLocation.component';


const routes: Routes = [
 
  { path: '', component: SchoolsComponent, pathMatch: 'full' },
  { path: 'school/:schoolId', component: SchoolPageComponent}, //schools/school/:schoolId
  { path: 'location/:location', component: SchoolLocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule {}
