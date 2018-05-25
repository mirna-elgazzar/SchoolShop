import { Component, OnInit } from '@angular/core';
import {SchoolPageService} from './schoolPage.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from '../school';
import {SchoolReview} from './schoolReview';
import * as moment from "moment"; 



@Component({
    selector: 'app-school-page',
    templateUrl: './schoolPage.component.html',
    styleUrls: ['./schoolPage.component.css']
})
export class SchoolPageComponent implements OnInit {
    
    encodedSchoolName:String = "";
    name: string = "";
    profilePicturePath:string = "../assets/img/ProfilePictures/";
   
    website: String = "";  websiteAvailable = false;
    rating: Number = 0;
    averageRating: Number = 0;
    numReviews:number = 0;
    
    email: String = "";               emailAvailable = false;
    phoneNumbers: String[] = [];               phoneNumbersAvailable = false;
    internationalPhoneNumbers: String[] = [];  internationalPhoneNumbersAvailable = false;
    
    address: String = "";             //always available
    route: String = "";               //always available
    googleMapsUrl: String = "";       //always available

    facebook: String = "";            fbAvailable = false;
    twitter: String = "";             twitterAvailable = false;
    instagram: String = "";           instagramAvailable = false;
    youtube: String = "";             youtubeAvailable = false;

    admission: String = "";           admissionAvailable = false;
    aboutUs: String = "";             aboutUsAvailable = false;
    visionMission: String = "";       visionMissionAvailable = false;
    facilities: String = "";          facilitiesAvailable = false;
    fees: String = "";                feesAvailable = false;
    supplies: String = "";            suppliesAvailable = false;
    city: String = "";                //always available
    ratingNumber: Number = 0;
    //schoolInfo: Object[] = new Array<Object>();
    
    
    schoolId: string = "";
    firstPhoto: String = "";

    IGCSE: Boolean;
    IB: Boolean;
    AMERICAN: Boolean;
    ABITUR : Boolean;
    BAC : Boolean;

    certificates: String[] = [];      certificatesAvailable = false;

    
    //logo: String = "";

    loadDone = false;
    adminLoggedIn = false;
    userLoggedIn = false;
    noLogIn = false; 


    ////--------Review attributes--------////////
    reviews : SchoolReview[];         reviewsAvailable = false;
    
    user_name:string = "";
    user_email:string = "";
    comment:string = "";
    reviewRating:Number = 0;
    rating_string: string = "";
    language: string = "english";

    rating5Num:Number = 0;  rating5Perc:string = "";  
    rating4Num:Number = 0;  rating4Perc:string = "";
    rating3Num:Number = 0;  rating3Perc:string = "";
    rating2Num:Number = 0;  rating2Perc:string = "";
    rating1Num:Number = 0;  rating1Perc:string = "";


    ///------------old Reveiw Attributes---------///
    oldReviewId: string = "";
    oldComment: string = "";
    
    /////------------Edit Reveiw Attributes---------///




    success: boolean = false;
    failure: boolean = false;
    message: string;

    ////------------favorite attributes---------------///
    isFav: boolean= false;
    isRev:boolean= false;

    ////------------photos attributes---------------///
    selectedImage;
    profilePicture:Boolean;
    photos: String[] = [];
    numPhotos:Number = 0;
    photosAvail:boolean = false;

 


    constructor(
        private schoolPageService: SchoolPageService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient) { }


    ngOnInit() {
         
            if(this.isLoggedIn()){
                this.userLoggedIn = true;
                console.log("user logged in");
            }
            else{
                this.userLoggedIn = false;
                console.log("no user logged in");
            }

        this.initialize();
     
    }

    initialize(){
        this.activatedRoute.params.subscribe((params: Params) => {
            this.schoolId = params['schoolId'];
            console.log("schoolId: "+ this.schoolId);
            this.schoolPageService.getSchoolInfo(this.schoolId).subscribe(
                 (res: any) => {
                     console.log(res.data);
                     this.name = res.data.name;
                     this.encodedSchoolName = this.name.replace(/\s+/g, '_');
                     this.address = res.data.address;
                     this.route = res.data.route;
                     this.city = res.data.city;
                     this.googleMapsUrl = res.data.googleMapsUrl;
                     this.profilePicture = res.data.profilePicture;
                     this.numPhotos = res.data.numPhotos;
                     if(res.data.numPhotos>0){
                         this.photosAvail = true;
                     }

                     this.IGCSE = res.data.IGCSE;
                     this.IB = res.data.IB;
                     this.ABITUR = res.data.ABITUR;
                     this.AMERICAN = res.data.AMERICAN;
                     this.BAC = res.data.BAC;
                     //this.certificates = res.data.certificates;

                     //getting the paths of the photos:
                     for(var i = 0; i < this.numPhotos; i++ ){
                         this.photos[i] = "../assets/img/gallery/"+this.name+"/"+i+".jpg";
                    }
                    this.selectedImage = this.photos[0];
                     console.log(this.photos);

                     console.log("certificates: "+ this.certificates);  //they are pushed in te array but not displayed

                      if (res.data.website) {
                        this.website = res.data.website; this.websiteAvailable = true;
                    }
                    if (res.data.average) {
                        console.log("average rating: "+ res.data.average);
                        this.averageRating = res.data.average; 
                    }
                     if (res.data.email!="[]") {
                        this.email = res.data.email; this.emailAvailable = true;
                    }
                     if (res.data.phoneNumbers) {
                        this.phoneNumbers = res.data.phoneNumbers; this.phoneNumbersAvailable = true;
                    }
                     if (res.data.internationalPhoneNumbers) {
                        this.internationalPhoneNumbers = res.data.internationalPhoneNumbers; this.internationalPhoneNumbersAvailable = true;
                    }
                     if (res.data.facebook) {
                        this.facebook = res.data.facebook; this.fbAvailable = true;
                    }
                     if (res.data.twitter) {
                        this.twitter = res.data.twitter; this.twitterAvailable = true;
                    }
                     if (res.data.instagram) {
                        this.instagram = res.data.instagram; this.instagramAvailable = true;
                    }
                     if (res.data.youtube) {
                        this.youtube = res.data.youtube; this.youtubeAvailable = true;
                    }
                     if (res.data.aboutUs) {
                        this.aboutUs = res.data.aboutUs; this.aboutUsAvailable = true;
                    }
                     if (res.data.visionMission) {
                        this.visionMission = res.data.visionMission; this.visionMissionAvailable = true;
                    }
                     if (res.data.admission) {
                        this.admission = res.data.admission; this.admissionAvailable = true;
                    }
                    if (res.data.facilities) {
                        this.facilities = res.data.facilities; this.facilitiesAvailable = true;
                    }
                    if (res.data.fees) {
                        this.fees = res.data.fees; this.feesAvailable = true;
                    }
                    if (res.data.supplies) {
                        this.supplies = res.data.supplies; this.suppliesAvailable = true;
                    }
                    if (res.data.certificates.length>0) {
                        this.certificates = res.data.certificates; this.certificatesAvailable = true;
                    }
                    console.log("encodedschool: "+ this.encodedSchoolName);
                    this.schoolPageService.getReviews(this.encodedSchoolName).subscribe(
                        (res: any) => {
                            this.reviews = res.data;
                            console.log("reviews: "+res.data);
                            
                            if(res.data.length>0){
                            
                                this.reviewsAvailable = true;
                                this.schoolPageService.getAverage(this.encodedSchoolName).subscribe(
                                    (res: any) => {
                                        this.averageRating = this.round(res.data.average,1);
                                        console.log("average rating: "+ this.averageRating);
                                        
                                        this.numReviews = res.data.total;

                                        this.schoolPageService.analyzeRating(this.encodedSchoolName).subscribe(
                                            (res: any) => {
                                                this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                                this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                                this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                                this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                                this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";

                                        
                                                this.rating5Num = res.data.rating5Num; 
                                                this.rating4Num = res.data.rating4Num;
                                                this.rating3Num = res.data.rating3Num;
                                                this.rating2Num = res.data.rating2Num;
                                                this.rating1Num = res.data.rating1Num;
                                                
                                            },
                                            (err: HttpErrorResponse) => {
                                                console.log(err);
                                            }
                                        );
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
 
                
                if(this.userLoggedIn){
                    this.schoolPageService.isFavorite(this.schoolId).subscribe(
          
                        (res: any) => {
                            
                            console.log(res.msg);
                            this.isFav = res.data;
                        },
                        (err: HttpErrorResponse) => {
                            console.log(err);
                        }
                    );

                    this.schoolPageService.isReviewed(this.schoolId).subscribe(
                        (res: any) => {
                            
                            this.isRev = res.data;
                            console.log("reviewd? "+ res.msg + ", "+res.data);  //tamam

                            //if the user already reviewed this school before, get the comment of te old review 
                            if(this.isRev){
                                console.log("reviewed");
                                this.schoolPageService.getUserReview(this.schoolId).subscribe(
                                    (res:any)=>{
                                        
                                        this.oldComment = res.data.comment;
                                        this.oldReviewId = res.data._id;
                                        console.log("Old review comment: "+ this.oldComment);
                                    },
                                    (err: HttpErrorResponse)=>{
                                        console.log(err);
                                    }

                                );
                            }
                        },
                        (err: HttpErrorResponse) => {
                            console.log(err);
                        }
                    );

                }
                

                    this.loadDone = true;
                 },
                 (err: HttpErrorResponse) => {
                    console.log(err);
                 });


        });
    }

    
    addFavorite(){
    this.isFav = true;
      this.schoolPageService.addFavorite(this.schoolId).subscribe(
          
          (res: any) => {
            console.log(res.msg);
            },
          (err: HttpErrorResponse) => {
            console.log(err);
            }
        );

    }
    removeFavorite(){
    this.isFav = false;
      this.schoolPageService.removeFavorite(this.schoolId).subscribe(
          
          (res: any) => {
            console.log(res.msg);
            },
          (err: HttpErrorResponse) => {
            console.log(err);
            }
        );

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

    scroll(el) {
        el.scrollIntoView();
    }

    twitAvailable(){
        return this.twitterAvailable;
    
    }

    faceAvailable(){
        return this.fbAvailable;
    }
    demo(){
        console.log("demo");
    }


    submitClicked(element){
        if(this.isLoggedOut()){
             this.schoolPageService.addReview(this.schoolId,this.name, this.reviewRating.toString(),
                                        this.comment,this.language, this.user_name)
        .subscribe(
            (res: any) => {
                    this.failure= false;
                    this.success = true;
                    this.message = res.msg;
                    //this.isRev = true;

                    this.schoolPageService.getReviews(this.encodedSchoolName).subscribe(
                        (res: any) => {
                        this.reviews = res.data;
                        console.log("reviews: "+res.data);
                        
                        if(res.data.length>0){
            
                            this.reviewsAvailable = true;
                            this.schoolPageService.getAverage(this.encodedSchoolName).subscribe(
                                (res: any) => {
                                    this.averageRating = this.round(res.data.average,1);
                                    this.numReviews = res.data.total;

                                    this.schoolPageService.analyzeRating(this.encodedSchoolName).subscribe(
                                        (res: any) => {
                                            this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";

                                    
                                            this.rating5Num = res.data.rating5Num; 
                                            this.rating4Num = res.data.rating4Num;
                                            this.rating3Num = res.data.rating3Num;
                                            this.rating2Num = res.data.rating2Num;
                                            this.rating1Num = res.data.rating1Num;
                                            
                                        },
                                        (err: HttpErrorResponse) => {
                                            console.log(err);
                                        }
                                    );
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
                    
                    
                    this.scroll(element);
              },
              (error:any) => {
                        this.success= false;
                        this.failure = true;
                        this.message = error.error.msg
                        
                    }
            );

        }
        else{
             this.schoolPageService.addUserReview(this.schoolId,this.name, this.reviewRating.toString(),
                                        this.comment,this.language)
        .subscribe(
            (res: any) => {
                    this.failure= false;
                    this.success = true;
                    this.message = res.msg;
                    this.isRev = true;

                    this.schoolPageService.getReviews(this.encodedSchoolName).subscribe(
                    (res: any) => {
                        this.reviews = res.data;
                        console.log("reviews: "+res.data);
                        
                        if(res.data.length>0){
                         
                            this.reviewsAvailable = true;
                            this.schoolPageService.getAverage(this.encodedSchoolName).subscribe(
                                (res: any) => {
                                    this.averageRating = this.round(res.data.average,1);
                                    this.numReviews = res.data.total;

                                    this.schoolPageService.analyzeRating(this.encodedSchoolName).subscribe(
                                        (res: any) => {
                                            this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";

                                    
                                            this.rating5Num = res.data.rating5Num; 
                                            this.rating4Num = res.data.rating4Num;
                                            this.rating3Num = res.data.rating3Num;
                                            this.rating2Num = res.data.rating2Num;
                                            this.rating1Num = res.data.rating1Num;
                                            
                                        },
                                        (err: HttpErrorResponse) => {
                                            console.log(err);
                                        }
                                    );
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

                this.scroll(element);
                console.log(res.data);

              },
              (error:any) => {
                        this.success= false;
                        this.failure = true;
                        this.message = error.error.msg
                        
                    }
            );

        }
   
            
    }

    editClicked(element){
        this.schoolPageService.editReview(this.schoolId, this.reviewRating.toString(),this.comment)
        .subscribe(
            (res: any) => {
                    this.failure= false;
                    this.success = true;
                    this.message = res.msg;

                    this.schoolPageService.getReviews(this.encodedSchoolName).subscribe(
                        (res: any) => {
                            this.reviews = res.data;
                            console.log("reviews: "+res.data);
                        
                            this.schoolPageService.getAverage(this.encodedSchoolName).subscribe(
                                (res: any) => {
                                    this.averageRating = this.round(res.data.average,1);
                                    this.numReviews = res.data.total;

                                    this.schoolPageService.analyzeRating(this.encodedSchoolName).subscribe(
                                        (res: any) => {
                                            this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";
                                            this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((this.numReviews).toString()))*100).toString())).toString()+"%";

                                    
                                            this.rating5Num = res.data.rating5Num; 
                                            this.rating4Num = res.data.rating4Num;
                                            this.rating3Num = res.data.rating3Num;
                                            this.rating2Num = res.data.rating2Num;
                                            this.rating1Num = res.data.rating1Num;
                                            
                                        },
                                        (err: HttpErrorResponse) => {
                                            console.log(err);
                                        }
                                    );
                                },
                                (err: HttpErrorResponse) => {
                                    console.log(err);
                                }
                            );

                        },
        
                    (err: HttpErrorResponse) => {
                        console.log(err);
                    }
                );
                this.scroll(element);

              },
              (error:any) => {
                        this.success= false;
                        this.failure = true;
                        this.message = error.error.msg
                        
                    }
            );


    }
    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    setSelectedImage(photo){
      this.selectedImage= photo;	
      console.log("selected image: "+ this.selectedImage);
   }



}

