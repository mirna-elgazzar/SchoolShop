import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UsersService } from '../users/users.service';
//import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [NgbModule,CommonModule, LayoutRoutingModule],
  declarations: [LayoutComponent,  FooterComponent,NavbarComponent ],
  providers: [UsersService]
})
export class LayoutModule {}
