import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-typography-design',
  templateUrl: './typography-design.component.html',
  styleUrls: ['./typography-design.component.scss']
})
export class TypographyDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getTypography().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
