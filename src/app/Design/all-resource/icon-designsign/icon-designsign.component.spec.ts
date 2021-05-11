import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDesignsignComponent } from './icon-designsign.component';

describe('IconDesignsignComponent', () => {
  let component: IconDesignsignComponent;
  let fixture: ComponentFixture<IconDesignsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDesignsignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDesignsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
