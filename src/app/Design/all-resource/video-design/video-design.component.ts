import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-video-design',
  templateUrl: './video-design.component.html',
  styleUrls: ['./video-design.component.scss']
})
export class VideoDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getTypography().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
