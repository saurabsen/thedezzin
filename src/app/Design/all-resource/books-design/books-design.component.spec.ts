import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDesignComponent } from './books-design.component';

describe('BooksDesignComponent', () => {
  let component: BooksDesignComponent;
  let fixture: ComponentFixture<BooksDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
