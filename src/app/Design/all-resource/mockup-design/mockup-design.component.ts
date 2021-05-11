import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-mockup-design',
  templateUrl: './mockup-design.component.html',
  styleUrls: ['./mockup-design.component.scss']
})
export class MockupDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getMockup().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
