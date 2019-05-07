import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotpostsComponent } from './hotposts.component';

describe('HotpostsComponent', () => {
  let component: HotpostsComponent;
  let fixture: ComponentFixture<HotpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
