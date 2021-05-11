import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-icon-designsign',
  templateUrl: './icon-designsign.component.html',
  styleUrls: ['./icon-designsign.component.scss']
})
export class IconDesignsignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getIcon().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
