import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A12ResponsiveFormComponent } from './a12-responsive-form.component';

describe('A12ResponsiveFormComponent', () => {
  let component: A12ResponsiveFormComponent;
  let fixture: ComponentFixture<A12ResponsiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A12ResponsiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A12ResponsiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
