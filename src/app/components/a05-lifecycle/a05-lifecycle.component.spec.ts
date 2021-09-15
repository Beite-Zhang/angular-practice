import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A05LifecycleComponent } from './a05-lifecycle.component';

describe('A05LifecycleComponent', () => {
  let component: A05LifecycleComponent;
  let fixture: ComponentFixture<A05LifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A05LifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A05LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
