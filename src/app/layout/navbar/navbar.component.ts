import { Component, OnInit,OnDestroy, ElementRef } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { UpdateService } from '../update.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription"
import * as moment from "moment";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit,OnDestroy {
  private toggleButton: any;
  private sidebarVisible: boolean;
  public loggedIn: Boolean = false; 
  private user: Object;
  private userItem: Object;
  userId: string = "";
  userName: string = "";

  updateResult:Boolean = false;
  private updateSubscrition: Subscription;
  

  constructor(private element: ElementRef, private usersService: UsersService, private router: Router, 
  private updateService: UpdateService) {
  
  }


  ngOnInit() {
  
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    
    this.loggedIn = this.isLoggedIn();


    //SUBSCRIPTION:
    this.updateSubscrition = this.updateService.getAuthUpdates().subscribe(
      (value)=>{
        this.updateResult = value;

        //if value passed from login/logout is true (user logged in)
        if(value){
          console.log("hey!");
          this.userItem = localStorage.getItem;
          //console.log("it"this.userItem);

          this.usersService.getCurrentUser().subscribe(
                  (res: any) => {
                    this.user = res.data;
                    this.userId = res.data._id;
                    this.userName = res.data.firstName;
                    console.log(res.data);
                    console.log("name: "+ this.userName);
                    //console.log(this.userId);
                  },
                  (err: HttpErrorResponse) => {
                    console.log(err);
                  }
            );

        }
      }
    );
    
   

    if(this.isLoggedIn()){
        this.usersService.getCurrentUser().subscribe(
                  (res: any) => {
                    this.user = res.data;
                    this.userId = res.data._id;
                    this.userName = res.data.firstName;
                    console.log(res.data);
                    console.log("name: "+ this.userName);
                    //console.log(this.userId);
                  },
                  (err: HttpErrorResponse) => {
                    console.log(err);
                  }
            );
    }

  }
  
  ngOnDestroy(){
    this.updateSubscrition.unsubscribe();

  }
  
  /*sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];

    setTimeout(function() {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }*/

  /*sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }

  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
*/
login(){
  this.loggedIn  =true;
}

public isLoggedIn() {
    
      return moment().isBefore(this.getExpiration()); //is the current time before expiration time?
    
        
  } 

  public isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }

logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.router.navigate(['/']);

        this.updateService.updateAuthStatus(false);

        console.log("you are loggd out");
    }

locationClicked(location: string) {
    this.router.navigate(['/home/search'], { queryParams: { location: location, page: "1" } });
  } 


}
