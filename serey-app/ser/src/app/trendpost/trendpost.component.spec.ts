import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendpostComponent } from './trendpost.component';

describe('TrendpostComponent', () => {
  let component: TrendpostComponent;
  let fixture: ComponentFixture<TrendpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
