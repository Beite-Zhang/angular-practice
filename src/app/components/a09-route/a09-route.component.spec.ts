import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A09RouteComponent } from './a09-route.component';

describe('A09RouteComponent', () => {
  let component: A09RouteComponent;
  let fixture: ComponentFixture<A09RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A09RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A09RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
