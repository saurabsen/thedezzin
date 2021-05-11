import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-inspiration-design',
  templateUrl: './inspiration-design.component.html',
  styleUrls: ['./inspiration-design.component.scss']
})
export class InspirationDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getInspiration().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
