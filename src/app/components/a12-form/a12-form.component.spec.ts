import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A12FormComponent } from './a12-form.component';

describe('A12FormComponent', () => {
  let component: A12FormComponent;
  let fixture: ComponentFixture<A12FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A12FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A12FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
