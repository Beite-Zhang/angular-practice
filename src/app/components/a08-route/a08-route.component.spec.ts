import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A08RouteComponent } from './a08-route.component';

describe('A08RouteComponent', () => {
  let component: A08RouteComponent;
  let fixture: ComponentFixture<A08RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A08RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A08RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
