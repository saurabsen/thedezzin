import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent implements OnInit {

  dummyItem : any = []
  constructor(
    private designService: DesignService
  ) { }

  ngOnInit(): void {
    this.designService.getAccessibility().subscribe(data => {
      this.dummyItem = data;
      console.log(data);
  });
  }



}
