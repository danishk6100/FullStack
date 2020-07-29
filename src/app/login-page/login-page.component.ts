import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  emailID="";
  showNeedHelp=false;
  forgotPassword=false;

  setEmailID(value){
    console.log(value);
    this.emailID=value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
