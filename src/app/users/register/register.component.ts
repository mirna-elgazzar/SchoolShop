import { Component,Input,  OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  //getting the entered values by two way binding
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    email: string;
    birthDate: Date;
    success: boolean = false;
    failure: boolean = false;
    message: string;
 

  constructor(private usersService: UsersService,private router: Router) {}

  ngOnInit() {

  }

  onSubmit() {
        //Construct a new user of user.model.ts with the values entered on pressing submit
        const user = new User(
            this.firstName,
            this.lastName,
            this.email,
            this.password,
            this.confirmPassword,
            this.birthDate
        ) 

        /*
        Calling the signUp function from the service to handle the register operation
        Gets back data and error messages then handling them by bootstrap alerts
        Setting the success and failure booleans to check on them in the html file
        */
        this.usersService.signUp(user)
            .subscribe(
            (res: any) => {
                    this.failure= false;
                    this.success = true;
                    this.message = res.msg;
                    console.log(res.data);
                    this.router.navigate(['/users/login'],{ queryParams: { successMsg: "account created successfully."} });
              },
              (error:any) => {
                        this.success= false;
                        this.failure = true;
                        this.message = error.error.msg
                        

                    }
            );
    };
  
 
}
