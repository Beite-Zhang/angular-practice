import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A04ChildEventComponent } from './a04-child-event.component';

describe('A04ChildEventComponent', () => {
  let component: A04ChildEventComponent;
  let fixture: ComponentFixture<A04ChildEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A04ChildEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A04ChildEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
