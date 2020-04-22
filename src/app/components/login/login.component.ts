import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { SaveUserService } from '../../services/save-user.service';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";
import { from } from "rxjs";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // name: String;
  // nickname: String;
  // age: String;
  // email: String;
  // password: String;
  // avatar: String;

  // user: User;

  // receivedUser: User;
  done: boolean = false;
  fileToUpload: File = null;

  constructor(private saveUserService: SaveUserService, public router: Router, private http: HttpClient) { }
  // email: string;
  // passwodr: string;

  // user = {
  //   name: "post request",
  //   email: "postRe@gmail.com",
  //   password: "123456",
  //   biz: true
  // };

  ngOnInit() {




    // this.http
    // .post('http://localhost:3000/postuser', this.user, { headers: headers })
    // .subscribe(responseData => {
    //   console.log(responseData);
    // });

  }

  login(User) {
    // this.router.navigate(["customers"]);
    console.log('in login(User)', User.value);

    // const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      // .set('Content-Type', 'application/json');

    // this.http
    //   .post('http://localhost:3000/postuser', this.user, { headers: headers })
    //   .subscribe(responseData => {

    //     console.log(responseData);
    //     console.log("login - response Data");

    //   });


    this.saveUserService.postData(User.value);
    // console.log(User.value);
    // console.log(value);
    // console.log(valid);

  }
  //for select options
  // public quantities: Array<number> = [];
  // getQuantity() {
  //   for (let i = 1; i <= 100; i++) {
  //     this.quantities.push(i)
  //   }
  //   return this.quantities;
  // }




  // submit(user: User) {
  //   this.saveUserService.postData(user).subscribe(
  //       (data: User) => { this.receivedUser = data; this.done = true; },
  //       error => console.log(error)
  //     );
  // }



  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

  }

}
