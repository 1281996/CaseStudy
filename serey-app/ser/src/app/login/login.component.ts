import { Component, OnInit } from '@angular/core';
import { LoginPojo } from '../trendpost/loginPojo';
import { PoststrendService } from '../poststrend.service';
import { Router } from '@angular/router';
import {
  AuthService,
  
  GoogleLoginProvider
} from 'angular-6-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPojo:LoginPojo=new LoginPojo()
  response:any
  constructor(private poststrendService:PoststrendService,private route:Router,private socialAuthService: AuthService) { }

  ngOnInit() {
  }
  onLogin(){
    this.poststrendService.validateUser(this.loginPojo)
    .subscribe((response)=>{
      this.response=response
      this.route.navigateByUrl("")
    })
  }



  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
   if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }







}
