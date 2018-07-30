import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
//import { DataserviceService } from "../dataservice.service";
@Component({
   selector: 'app-userlogin',
   templateUrl: './userlogin.component.html',
   styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent implements OnInit {
   formdata;
   constructor(private router: Router) { }
   //, private dataService:DataserviceService
   ngOnInit() {
      this.formdata = new FormGroup({
         uname: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
         ])),
         passwd: new FormControl("", this.passwordvalidation)
      });
   }
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return {"passwd" : true};
      }
   }
   onClickSubmit(data) {
    //private dataService:DataService;
      console.log(data.uname);
      if (data.uname == "alombd" && data.passwd == "123456") {
         alert("Login Successful");
         this.router.navigate(['app-mainpage'])
         //this.dataService.setUser(1); 
      }
   }
   //constructor( private dataService:DataService) {     }
   //onSubmit() {
        //this.dataService.setUser(1); 
   //} 
   
}