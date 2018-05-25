import { Component,Input,  OnInit, Output ,EventEmitter  } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UpdateService } from '../../layout/update.service';

import { User } from '../user';
import * as moment from "moment";
//import { NavbarComponent } from '../../layout/navbar/navbar.component';

//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    //@Output() loginClicked = new EventEmitter<boolean>();

    private email: String;
    private password: String;

    success: boolean = false;
    failure: boolean = false;
    message: string;

    //private successReset: String;
    //private failedReset: String;

    //warning Flags
    
    
    private PasswordWarning: boolean = false;
    private emailWarning: boolean = false;
    
    private resetUserEmailWarning: boolean = false;
    
    private resetSuccessWarning: boolean = false;
    private resetFailureWarning: boolean = false;
    
    private loggedIn: boolean = false;
  
    
  constructor(private usersService: UsersService, private router: Router,
                private route: ActivatedRoute, private updateService:UpdateService) {}

  ngOnInit() {
      this.email = "email";
      this.password = "";
       this.route.queryParams.subscribe(params => {
                this.success = true;
                this.message = params['successMsg'];

                if (!this.message) {
                    this.success = false;
                }
               
                console.log("message: "+this.message);
            });
            

  }


    login(){

        if(!this.email || this.email.length == 0){
            this.emailWarning = true;
           }
        else {
            this.emailWarning = false;        
        }
        if(!this.password || this.password.length == 0){
            this.PasswordWarning = true;
        }
        else{
            this.PasswordWarning = false;
        }

        if(!this.emailWarning && !this.PasswordWarning){

            this.usersService.login(this.email, this.password)
            .subscribe(
            (res: any) => {
                    this.failure= false;
                    this.loggedIn = true;
                    //this.message = res.msg;
                    console.log(res.data);

/*We are taking the current instant and the expiresInproperty, 
    and using it to calculate the expiration timestamp*/
                    
                    const expiresAt = moment().add(12,'hours');
                    console.log("the current time is: " + moment());
                    console.log("expires in: " + res.expiresIn);
                    console.log("expires at: " + expiresAt);
                    
                    // console.log(res.data)
                    localStorage.setItem('id_token', res.data);
                    //console.log(localStorage.getItem('id_token'))
                    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

                    this.updateService.updateAuthStatus(true);

                    this.router.navigate(['/']);

                    // console.log(localStorage);
              },
              (error:any) => {
                        this.success= false;
                        this.failure = true;
                        this.message = error.error.msg
                        
                    }
            );
          
        }

    }
  
  

}
