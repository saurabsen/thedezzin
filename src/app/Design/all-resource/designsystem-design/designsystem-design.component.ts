import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-designsystem-design',
  templateUrl: './designsystem-design.component.html',
  styleUrls: ['./designsystem-design.component.scss']
})
export class DesignsystemDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getDesignSystem().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
