import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-books-design',
  templateUrl: './books-design.component.html',
  styleUrls: ['./books-design.component.scss']
})
export class BooksDesignComponent implements OnInit {

  animationItem : any = []

  constructor( private designService: DesignService) { }

  ngOnInit(): void {
    this.designService.getBooks().subscribe(data => {
      this.animationItem = data;
      console.log(data);
  });
  }
}
