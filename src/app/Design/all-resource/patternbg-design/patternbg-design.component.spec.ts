import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternbgDesignComponent } from './patternbg-design.component';

describe('PatternbgDesignComponent', () => {
  let component: PatternbgDesignComponent;
  let fixture: ComponentFixture<PatternbgDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternbgDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternbgDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
