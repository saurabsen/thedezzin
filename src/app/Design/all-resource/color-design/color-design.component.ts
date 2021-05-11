import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-color-design',
  templateUrl: './color-design.component.html',
  styleUrls: ['./color-design.component.scss']
})
export class ColorDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getColor().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }
}
