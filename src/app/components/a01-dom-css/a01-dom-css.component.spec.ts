import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A01DomCssComponent } from './a01-dom-css.component';

describe('A01DomCssComponent', () => {
  let component: A01DomCssComponent;
  let fixture: ComponentFixture<A01DomCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A01DomCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A01DomCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
