import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A11ObserverComponent } from './a11-observer.component';

describe('A11ObserverComponent', () => {
  let component: A11ObserverComponent;
  let fixture: ComponentFixture<A11ObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11ObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11ObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
