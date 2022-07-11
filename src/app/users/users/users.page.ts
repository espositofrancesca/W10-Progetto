import { IAuthData } from './../../auth/interfaces/iauth-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
 /*  template: `<li *ngFor="let s of sfinita">{{s.email}}</li>

  ` */
})
export class UsersPage implements OnInit {
  user: IAuthData[] = []
  error = undefined;
  data:Array<any> = []



  constructor(private authService: AuthService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllUsers();

  }

  getAllUsers() {
    console.log('Chiamata Ajax al server');
    this.authService.authSubject.subscribe((userLogin) => {
      this.http
        .get<IAuthData[]>('http://localhost:4201/users', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userLogin?.accessToken,

          }),
        })
        .subscribe(
          (resp) => {
            /* this.user = resp
            console.log(this.user); */
            this.data = resp
            console.log(this.data);

          },
          (err) => {
            /* console.log(err); */
            this.error = err.error;
          }
        );
    });
  }



}
