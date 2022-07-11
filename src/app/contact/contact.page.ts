import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
  myname = ''
  mylastname= ''
  myemail=''
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(val => {
      if(val !== null) {
        this.myname = `${val?.user.firstname} ${val?.user.lastname} ` ;
        this.myemail = `${val?.user.email}`;
      } else {
        this.myname = 'Epicode App';
      }
    })
  }
  }
