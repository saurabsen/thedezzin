import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar-design',
  templateUrl: './side-navbar-design.component.html',
  styleUrls: ['./side-navbar-design.component.scss']
})
export class SideNavbarDesignComponent implements OnInit {

  constructor() { }

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 400;
  }

  ngOnInit(): void {
  }

}
