import { Component, OnInit } from '@angular/core';
import {StationaryPageService} from './stationaryPage.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stationary } from '../stationary';
import * as moment from "moment";


@Component({
    selector: 'app-stationary-page',
    templateUrl: './stationaryPage.component.html',
    styleUrls: ['./stationaryPage.component.css']
})
export class StationaryPageComponent implements OnInit {
    encodedStationeryName:String = "";
    name: string = "";
   
    website: String = "";  websiteAvailable = false;
    email: String = "";               emailAvailable = false;
    phoneNumbers: String[] = [];               phoneNumbersAvailable = false;
    internationalPhoneNumbers: String[] = [];  internationalPhoneNumbersAvailable = false;
    
    address: String = "";             //always available
    route: String = "";               //always available
    googleMapsUrl: String = "";       //always available

    facebook: String = "";            fbAvailable = false;
    twitter: String = "";             twitterAvailable = false;
    instagram: String = "";           instagramAvailable = false;
   
    aboutUs: String = "";             aboutUsAvailable = false;
    stores: String = "";             storesAvailable = false;
    contactUs: String = "";           contactAvailable = false;
    openingHours: String = "";        hoursAvailable = false;

    city: String = "";                //always available
    
    stationeryId: string = "";

    isFav: boolean= false;
    //reviews:
    reviews:Object[];                reviewsAvailable = false;
    //rating: Number = 0;
    averageRating: Number = 0;
    numReviews:number = 0;

    
    loadDone = false;
    //adminLoggedIn = false;
    userLoggedIn = false;
    noLogIn = false;

      constructor(
        private stationaryService: StationaryPageService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient) { }


    ngOnInit() {

        this.initialize();
    
    }

    initialize(){
        this.activatedRoute.params.subscribe((params: Params) => {
            this.stationeryId = params['stationaryId'];

            this.stationaryService.getStatioaryInfo(this.stationeryId).subscribe(
                 (res: any) => {
                     console.log(res.data);
                     this.name = res.data.name;
                     this.encodedStationeryName = this.name.replace(/\s+/g, '_');
                     this.address = res.data.address;
                     this.route = res.data.route;
                     this.city = res.data.city;
                     this.googleMapsUrl = res.data.google_maps_url;
                     this.averageRating = res.data.rating;


                      if (res.data.website) {
                        this.website = res.data.website; this.websiteAvailable = true;
                    }
                     if (res.data.email) {
                        this.email = res.data.email; this.emailAvailable = true;
                    }
                     if (res.data.phone_number) {
                        this.phoneNumbers = res.data.phone_number; this.phoneNumbersAvailable = true;
                    }
                     if (res.data.international_phone_number) {
                        this.internationalPhoneNumbers = res.data.international_phone_number; this.internationalPhoneNumbersAvailable = true;
                    }
                     if (res.data.facebook_link) {
                        this.facebook = res.data.facebook_link; this.fbAvailable = true;
                    }
                     if (res.data.twitter_link) {
                        this.twitter = res.data.twitter_link; this.twitterAvailable = true;
                    }
                     if (res.data.instagram_link) {
                        this.instagram = res.data.instagram_link; this.instagramAvailable = true;
                    }
                    
                     if (res.data.about_us) {
                        this.aboutUs = res.data.about_us; this.aboutUsAvailable = true;
                    }
                    if (res.data.opening_hours) {
                        this.openingHours = res.data.opening_hours; this.hoursAvailable = true;
                    }
                    if (res.data.stores) {
                        this.stores = res.data.stores; this.storesAvailable = true;
                    }
                    if (res.data.contact_us) {
                        this.contactUs = res.data.contact_us; this.contactAvailable = true;
                    }
                    

                    this.stationaryService.getReviews(this.encodedStationeryName).subscribe(
                        
                    (res: any) => {
                        this.reviews = res.data;
                        console.log(res.data);
                        
                        if(res.data.length>0){
                            
                            this.reviewsAvailable = true;
                            this.stationaryService.getAverage(this.encodedStationeryName).subscribe(
                                (res: any) => {
                                    this.averageRating = this.round(res.data.average,1);
                                    this.numReviews = res.data.total;
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
 
                
                if(this.isLoggedIn()){
                    /*this.stationaryService.isFavorite(this.stationeryId).subscribe(
          
                    (res: any) => {
                         console.log(res.msg);
                         this.isFav = res.data;
                    },
                    (err: HttpErrorResponse) => {
                        console.log(err);
                    }
                );*/

                }
                

                    this.loadDone = true;
                 },
                 (err: HttpErrorResponse) => {
                    console.log(err);
                 });


        });
        
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
    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

}