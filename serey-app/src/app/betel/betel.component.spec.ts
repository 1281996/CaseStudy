import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetelComponent } from './betel.component';

describe('BetelComponent', () => {
  let component: BetelComponent;
  let fixture: ComponentFixture<BetelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
