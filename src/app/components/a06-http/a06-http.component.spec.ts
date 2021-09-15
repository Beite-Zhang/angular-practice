import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A06HttpComponent } from './a06-http.component';

describe('A06HttpComponent', () => {
  let component: A06HttpComponent;
  let fixture: ComponentFixture<A06HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A06HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A06HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
