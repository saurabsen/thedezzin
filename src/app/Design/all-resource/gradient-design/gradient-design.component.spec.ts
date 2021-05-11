import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientDesignComponent } from './gradient-design.component';

describe('GradientDesignComponent', () => {
  let component: GradientDesignComponent;
  let fixture: ComponentFixture<GradientDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
