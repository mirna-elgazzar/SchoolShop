import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: '../homepage/homepage.module#HomepageModule'
      },
      {
        path: 'users',
        loadChildren: '../users/users.module#UsersModule'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'schools',
        loadChildren: '../schools/schools.module#SchoolsModule'
      },
      {
        path: 'stationary',
        loadChildren: '../stationary/stationary.module#StationaryModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
