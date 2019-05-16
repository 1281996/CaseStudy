import { Component, OnInit } from '@angular/core';
import { RegistrationPojo } from '../trendpost/registrationPojo';
import { PoststrendService } from '../poststrend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationPojo:RegistrationPojo=new RegistrationPojo()
  response:any

  constructor(private poststrendService:PoststrendService,private route:Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.poststrendService.saveUser(this.registrationPojo)
    .subscribe((response)=>{
      this.response=response
    })
    this.route.navigateByUrl("login")
  }

}
