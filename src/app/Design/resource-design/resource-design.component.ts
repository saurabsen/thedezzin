import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-design',
  templateUrl: './resource-design.component.html',
  styleUrls: ['./resource-design.component.scss']
})
export class ResourceDesignComponent implements OnInit {

  dummyItem = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  constructor() { }

  ngOnInit(): void {
  }

}
