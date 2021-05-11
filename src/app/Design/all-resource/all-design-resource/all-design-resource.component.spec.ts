import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesignResourceComponent } from './all-design-resource.component';

describe('AllDesignResourceComponent', () => {
  let component: AllDesignResourceComponent;
  let fixture: ComponentFixture<AllDesignResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDesignResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDesignResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
