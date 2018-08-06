import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGridLayoutComponent } from './image-grid-layout.component';

describe('ImageGridLayoutComponent', () => {
  let component: ImageGridLayoutComponent;
  let fixture: ComponentFixture<ImageGridLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGridLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
