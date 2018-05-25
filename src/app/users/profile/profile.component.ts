import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from '../../schools/school';
import {SchoolReview} from '../../schools/schoolPage/schoolReview';
import * as moment from "moment";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
   
})

export class ProfileComponent implements OnInit {

    firstName: string = "";
    lastName: string = "";
    email: string = "";       emailAvailable = false;
   
    birthDate: Date;          bdAvailable = false;
    favorites:[String];
    favSchools: [Object];
    joined: Date;
    userId: string = "";
    public loggedIn: Boolean = false;
    private user: Object;
    myProfile:Boolean = false;



    //////------Reviews variables-----///////
    count: Number = 0;
    reviews : SchoolReview[]; reviewsAvailable = false;
    
    editing: Boolean[] = [];
    editIndex = 0;

    editComment: String;
    editRating: Number;

    constructor(private UsersService: UsersService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient) { }

    ngOnInit() {
        this.loggedIn = this.UsersService.isLoggedIn();
        this.initialize();
    }

    initialize(){

        //get the user id in the url of the visited profile
        this.activatedRoute.params.subscribe((params: Params) => {
            this.userId = params['userId']; //the visited userId

            //is there a logged in user?
            if(this.isLoggedIn()){

            //get the id of the currently logged in user
            this.UsersService.getCurrentUser().subscribe(
                    (res: any) => {
                        ////if the logged in user has the same id as the id in the route -> logged in user visiting profile
                        if(res.data && res.data._id == this.userId){

                            this.myProfile = true;
                            this.user = res.data;
                            this.firstName = res.data.firstName;
                            this.lastName = res.data.lastName;
                            this.email = res.data.email;
                            this.joined = res.data.createdAt;
                            
                            if(res.data.birthDate){
                                this.birthDate = res.data.birthDate; this.bdAvailable = true;
                            }
                            this.favorites = res.data.favorites;
                            var schools = [];
                            console.log("number of favorites: " + this.favorites.length);
                            for (var i = 0; i < this.favorites.length; i++){

                                this.UsersService.getSchoolInfo(this.favorites[i]).subscribe(
                                    (res: any) => {
                                        console.log("fav school: "+ res.data.name);
                                        schools.push(res.data);
                                        
                                    },
                                    (err: HttpErrorResponse) => {
                                            console.log(err);
                                    }
                                );
                            }
                            this.favSchools= schools as [Object];
                        

                             this.UsersService.getReviews(this.userId).subscribe(
                                (res: any) => {
                                    this.reviews = res.data;
                                    if(this.reviews.length>0){
                                        this.reviewsAvailable = true;
                                    }
                                    console.log("reviews: "+res.data);
                    
                                },
                                (err: HttpErrorResponse) => {
                                    console.log(err);
                                }
                            );
                            console.log(this.user);


                        }
                        //if logged in user not the same as the id in url
                        else{
                            this.myProfile = false;

                            this.UsersService.getOneUser(this.userId).subscribe(
                                (res:any)=>{
                                    this.user = res.data;
                                    this.firstName = res.data.firstName;
                                    this.lastName = res.data.lastName;
                                    this.email = res.data.email;
                                    this.joined = res.data.createdAt;
                                    if(res.data.birthDate){
                                        this.birthDate = res.data.birthDate; this.bdAvailable = true;
                                    }
                                            
                                },
                                (err: HttpErrorResponse) => {
                                    console.log(err);
                                }
                            );
                        }
                    },
                    (err: HttpErrorResponse) => {
                        console.log(err);
                    }
                );

            }else{  //if no user is logged in
                this.myProfile = false;
                this.UsersService.getOneUser(this.userId).subscribe(
                    (res:any)=>{
                        this.user = res.data;
                        this.firstName = res.data.firstName;
                        this.lastName = res.data.lastName;
                        this.email = res.data.email;
                        this.joined = res.data.createdAt;
                        if(res.data.birthDate){
                            this.birthDate = res.data.birthDate; this.bdAvailable = true;
                        }
                                            
                    },
                    (err: HttpErrorResponse) => {
                        console.log(err);
                    }
                );

            }

        });


    }

    onDelete(reviewId){
        this.UsersService.deleteReview(reviewId).subscribe(
                                (res: any) => {
                                    console.log(res.msg);
                    
                                },
                                (err: HttpErrorResponse) => {
                                    console.log(err);
                                }
                            );
        location.reload();

    }

    removeFavorite(schoolId){
      this.UsersService.removeFavorite(schoolId).subscribe(
          
          (res: any) => {
            console.log(res.msg);
            },
          (err: HttpErrorResponse) => {
            console.log(err);
            }
        );
        location.reload();

    }

    public isLoggedIn() {
      return moment().isBefore(this.getExpiration()); 
    } 

    public isLoggedOut() {
      return !this.isLoggedIn();
    }

    getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }

    



}

