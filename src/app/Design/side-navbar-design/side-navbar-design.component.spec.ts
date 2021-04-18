import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarDesignComponent } from './side-navbar-design.component';

describe('SideNavbarDesignComponent', () => {
  let component: SideNavbarDesignComponent;
  let fixture: ComponentFixture<SideNavbarDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavbarDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavbarDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
