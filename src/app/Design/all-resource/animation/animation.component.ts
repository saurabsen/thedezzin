import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  animationItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getAnimation().subscribe(data => {
      this.animationItem = data;
      console.log(data);
  });
  }

}
