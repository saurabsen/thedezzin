import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  button: string = "clicked";
  clc: boolean = false;

  ngOnInit(): void {
  }

  blutton() {
    if(this.clc == false){
      this.clc = true;
      alert("we clicked");
    }
  }

}
