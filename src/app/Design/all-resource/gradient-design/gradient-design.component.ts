import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-gradient-design',
  templateUrl: './gradient-design.component.html',
  styleUrls: ['./gradient-design.component.scss']
})
export class GradientDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getGradient().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
