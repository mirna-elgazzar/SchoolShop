import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  showFavorites = false;
  loggedin: Boolean;
  users: User[];
  private user: User;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (res: any) => {
        this.users = res;
        
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
