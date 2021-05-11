import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDesignComponent } from './content-design.component';

describe('ContentDesignComponent', () => {
  let component: ContentDesignComponent;
  let fixture: ComponentFixture<ContentDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
