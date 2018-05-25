import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from "@angular/http";


import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


import { UsersService } from './users.service';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule,HttpModule, FormsModule,CommonModule, UsersRoutingModule],
  declarations: [UsersComponent,RegisterComponent,ProfileComponent, LoginComponent],
  providers: [UsersService]
})
export class UsersModule {} 
