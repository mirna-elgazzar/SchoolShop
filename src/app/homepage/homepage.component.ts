import { Component, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html'
})
export class HomepageComponent implements OnInit {

  ////------------message attributes--------------////
  email:string = "";
  name:string = "";
  message:string = "";

  success: boolean = false;
  failure: boolean = false;
  successMessage: string;


  constructor(private homepageService: HomepageService, private router: Router) {}

  ngOnInit() {
    //location.reload();
  }

  searchClicked(result: string) {
    this.router.navigate(['/home/search'], { queryParams: { result: result, page: "1" } });
  }  //SE

  locationClicked(location: string) {
    this.router.navigate(['/home/search'], { queryParams: { location: location, page: "1" } });
  }  

  send(){
    

    this.homepageService.sendMessage(this.email, this.name, this.message).subscribe(
      (res:any)=>{
        this.failure= false;
        this.success = true;
        this.successMessage = res.msg;
        console.log(this.successMessage);

        console.log("message sent. Name: "+ this.name+". Email: "+ this.email);
      },
      (err: HttpErrorResponse) => {
          this.success= false;
          this.failure = true;
          this.successMessage = err.error.msg
      }
    );
  }



}
