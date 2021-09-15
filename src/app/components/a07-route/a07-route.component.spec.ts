import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A07RouteComponent } from './a07-route.component';

describe('A07RouteComponent', () => {
  let component: A07RouteComponent;
  let fixture: ComponentFixture<A07RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A07RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A07RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
