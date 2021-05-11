import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyDesignComponent } from './typography-design.component';

describe('TypographyDesignComponent', () => {
  let component: TypographyDesignComponent;
  let fixture: ComponentFixture<TypographyDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypographyDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
