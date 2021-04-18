import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDesignComponent } from './resource-design.component';

describe('ResourceDesignComponent', () => {
  let component: ResourceDesignComponent;
  let fixture: ComponentFixture<ResourceDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
