import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  openNav=false;
  signed:boolean=false;
  signText:string=this.signed?"UserName":"SignIn";
  constructor() {
  }
  navBarContent=["All","Echo & Alexa","Fire TV Stick","Kindle e-readers","Fire TV",
  "Fire Tablets","Amazon Music","Appstore for Android","Subscribe & Save","Smart Home",
  "Amazon Physical Stores","Gift Cards","#FoundItOnAmazon","Amazon Subscription Boxes",
  "International Shopping","Amazon Live","Pet Supplies","Sports and Outdoors","Baby",
  "Automotive"];
  ngOnInit(): void {
  }

  getRoute(){
    if(this.signText=='SignIn')return "login";
    
  }

}
