import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

/*The order of the routes in the configuration matters and this is by design. 
The router uses a first-match wins strategy when matching routes,
 so more specific routes should be placed above less specific routes.  */

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',
    // pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
