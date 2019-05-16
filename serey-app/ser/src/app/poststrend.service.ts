import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoststrendService {
/*   postComment(postingComment: import("./postingComment").PostingComment) {
    throw new Error("Method not implemented.");
  } */

  private baseUrl = "http://localhost:6543";
  private userUrl = "http://localhost:6542";
  
  constructor(private http:HttpClient) { }

  getAllusers(): Observable<Object>{
    return this.http.get(`${this.baseUrl}` + `/getAllPosts`);
  }

  updateLike(userName:string,likes:number): Observable<Object>{
    console.log(`${this.baseUrl}` + `/updateLikes/`+userName+`/`+likes)
    return this.http.get(`${this.baseUrl}` + `/updateLikes/`+userName+`/`+likes);
  }
  
  getAllComments(userName:string): Observable<Object>{
    return this.http.get(`${this.baseUrl}` + `/getAllComments/`+userName);
  }

  postingComments(postingComments:Object,userName2:string):Observable<Object>{
    console.log(`${this.baseUrl}` + `/postComments/`+userName2,postingComments);
    return this.http.post(`${this.baseUrl}` + `/postComments/`+userName2,postingComments);
  }

  saveUser(registrationPojo:Object):Observable<Object>{
    console.log(`${this.userUrl}` + `/register`,registrationPojo);
    return this.http.post(`${this.userUrl}` + `/register`,registrationPojo);
  }


  
  validateUser(loginPojo:Object): Observable<Object>{
    console.log(`${this.userUrl}` + `/login`,loginPojo)
    return this.http.post(`${this.userUrl}` + `/login`,loginPojo);
  }

  }
