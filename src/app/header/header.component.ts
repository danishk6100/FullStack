import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openNav;
  closeResult='';
  countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia",
  "Austria","America","Austrian Empire","Azerbaijan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Croatia","Cuba",
  "Cyprus" 
  ];
  selectedCountry='America';
  popoverIsVisible=false;
  changeText=false;
  itemsInCart=0;
  displayFlagButton=false;
  displayFlagDialogHover=false;
  displayFlagDialog=false;
  languages=["Español - ES","简体中文 - ZH","Deutsch - DE","Português - PT","繁體中文 - ZH","한국어 - KO","עברית - HE"];
  selectedLang="English";
  displayAccDialog=false;
  yourList1=["Create a List","Find a List or Registry","Find a Gift","Save Items from the Web","Wedding Registry","Baby Registry",
    "Friends & Family Gifting","AmazonSmile Charity Lists","Pantry Lists","Your Hearts","Explore Idea Lists","Explore Showroom",
    "Take the Home Style Quiz"];
    yourList2=["Your Recommendations",
      "Your Subscribe & Save Items",
      "Memberships & Subscriptions",
      "Your Service Requests",
      "Your Garage",
      "Your Fanshop",
      "Your Pets",
      "Your Content and Devices",
      "Your Music Library",
      "Your Amazon Drive",
      "Your Prime Video",
      "Your Kindle Unlimited",
      "Your Watchlist",
      "Your Video Purchases & Rentals",
      "Your Android Apps & Devices"]
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(chooseLocation){
    this.modalService.open(chooseLocation,{windowClass: 'my-class',ariaLabelledBy:'modal-basic-title'}).result.then((result)=>
    {
      this.closeResult=`Closed with: ${result}`;
    }
    );
  }
  showPopover(){
    this.popoverIsVisible=true;
  }
  hidePopover(){
    this.popoverIsVisible=false;
  }
  // dialogDisplay1(){
  //   setTimeout(this.dialogDisplay, 300);
  //   console.log("Succwesshj")
  // }
  // dialogDisplay(){
    
  //     if(this.displayFlagButton==true || this.displayFlagDialogHover==true){
  //        this.displayFlagDialogVariable=true;
  //   }
  //   else {
  //     this.displayFlagDialogVariable=false;
  //   }
     
  // }
}

