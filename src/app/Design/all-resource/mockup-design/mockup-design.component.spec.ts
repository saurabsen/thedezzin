import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupDesignComponent } from './mockup-design.component';

describe('MockupDesignComponent', () => {
  let component: MockupDesignComponent;
  let fixture: ComponentFixture<MockupDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
