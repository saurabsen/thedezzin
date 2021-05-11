import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-image-design',
  templateUrl: './image-design.component.html',
  styleUrls: ['./image-design.component.scss']
})
export class ImageDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getImage().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
