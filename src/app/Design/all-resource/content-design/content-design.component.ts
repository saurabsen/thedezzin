import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-content-design',
  templateUrl: './content-design.component.html',
  styleUrls: ['./content-design.component.scss']
})
export class ContentDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getContent().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
