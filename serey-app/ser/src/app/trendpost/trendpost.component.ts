import { Component, OnInit } from '@angular/core';
import { PoststrendService } from '../poststrend.service';
import { PostingComment } from '../postingComment';

@Component({
  selector: 'app-trendpost',
  templateUrl: './trendpost.component.html',
  styleUrls: ['./trendpost.component.css']
})
export class TrendpostComponent implements OnInit {
  reslikes:any
  likes:number
  posts:any;
  comments:any;
  flag=false;
  userName1:any;
  response:any;  
  postingComment:PostingComment=new PostingComment()

    constructor(private poststrendService:PoststrendService) { }
  
    ngOnInit() {
       this.poststrendService.getAllusers().subscribe((posts)=>{
        this.posts=posts;
        console.log(this.posts)
      }) 

  
    }
    onCommentPost(userName2:string){
      console.log(userName2+"mallu  ")
      this.poststrendService.postingComments(this.postingComment,userName2)
      .subscribe((response)=>{this.response=response})
      console.log(this.postingComment)

  
    }

/*     onLogin(){
      this.submitted=true
      console.log("in login() method")
      console.log(this.loginAccount)
        this.userService.validateUser(this.loginAccount)
        .subscribe((response) =>{ 
          this.response=response
          console.log(this.response)});
        
        console.log(this.loginAccount)
  
        if(this.response){
  
        }
     
       } */



    onLike(likes:number,userName:string){
      console.log("hello"+likes+userName)
    this.likes=likes++;
    console.log(likes)
    this.poststrendService.updateLike(userName,likes).subscribe((likes)=>{
      this.reslikes=likes;
      console.log(this.reslikes)
    }) 
  }


  onComment(userName1:string){
    this.flag=true;
    console.log("hello"+userName1)
    this.poststrendService.getAllComments(userName1).subscribe((comments)=>{
this.comments=comments;
this.userName1=userName1
console.log(comments)
    })

  }
  
}
