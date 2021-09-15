import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A10RouteComponent } from './a10-route.component';

describe('A10RouteComponent', () => {
  let component: A10RouteComponent;
  let fixture: ComponentFixture<A10RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A10RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A10RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
