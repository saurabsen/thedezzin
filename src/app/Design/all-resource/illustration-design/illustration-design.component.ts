import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-illustration-design',
  templateUrl: './illustration-design.component.html',
  styleUrls: ['./illustration-design.component.scss']
})
export class IllustrationDesignComponent implements OnInit {

  listItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getIllustration().subscribe(data => {
      this.listItem = data;
      console.log(data);
  });
  }

}
