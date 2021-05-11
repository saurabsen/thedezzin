import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsystemDesignComponent } from './designsystem-design.component';

describe('DesignsystemDesignComponent', () => {
  let component: DesignsystemDesignComponent;
  let fixture: ComponentFixture<DesignsystemDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsystemDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsystemDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
