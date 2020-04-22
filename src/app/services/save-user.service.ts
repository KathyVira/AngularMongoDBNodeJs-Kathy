import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveUserService {
  userName: String;
  nickname: String;
  age: String;
  email: String;
  password: String;
  avatar: String;

  user: User;

  receivedUser: User;

  constructor(private http: HttpClient) {}

  postData(User) {
    // console.log(this.http.post('http://localhost:3000/postuser', User));

    console.log(User);
    // const body = { name: user.name, age: user.age };
    // this.http.post('http://localhost:3000/postuser', User.value);
    console.log('in postData () saveUserService');
    // debugger;

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    debugger;
    this.http
      .post('http://localhost:3000/postuser', User, { headers: headers })
      .subscribe((responseData) => {
        debugger;
        console.log(responseData);
        console.log('postData() saveUserService() - response Data');
      });
  }
}
