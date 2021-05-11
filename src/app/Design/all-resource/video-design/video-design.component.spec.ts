import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDesignComponent } from './video-design.component';

describe('VideoDesignComponent', () => {
  let component: VideoDesignComponent;
  let fixture: ComponentFixture<VideoDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
