import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationDesignComponent } from './inspiration-design.component';

describe('InspirationDesignComponent', () => {
  let component: InspirationDesignComponent;
  let fixture: ComponentFixture<InspirationDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
