import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A12TemplateFormComponent } from './a12-template-form.component';

describe('A12TemplateFormComponent', () => {
  let component: A12TemplateFormComponent;
  let fixture: ComponentFixture<A12TemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A12TemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A12TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
