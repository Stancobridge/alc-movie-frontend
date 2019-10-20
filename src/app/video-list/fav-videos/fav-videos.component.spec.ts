import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavVideosComponent } from './fav-videos.component';

describe('FavVideosComponent', () => {
  let component: FavVideosComponent;
  let fixture: ComponentFixture<FavVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
