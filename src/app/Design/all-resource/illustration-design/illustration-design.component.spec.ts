import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationDesignComponent } from './illustration-design.component';

describe('IllustrationDesignComponent', () => {
  let component: IllustrationDesignComponent;
  let fixture: ComponentFixture<IllustrationDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
