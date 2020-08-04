import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  ActivatedRoute,
  Router
} from '@angular/router';
import{
  AuthServiceService
} from '../services/auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  digit:string="";

  constructor(private auth: AuthServiceService) { }


  ngOnInit(): void {
  }

  push(char:string)
  {
    if(this.digit.length<3)
    {
      this.digit+=char;
    }
  }
  
  clear()
  {
    this.digit="";
  }

  check()
  {
    this.auth.checkCode(this.digit);
  }
}
