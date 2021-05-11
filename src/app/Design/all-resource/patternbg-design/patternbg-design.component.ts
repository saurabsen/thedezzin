import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-patternbg-design',
  templateUrl: './patternbg-design.component.html',
  styleUrls: ['./patternbg-design.component.scss']
})
export class PatternbgDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getPatternAndAbstract().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
