import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A02ChildGetParentDataComponent } from './a02-child-get-parent-data.component';

describe('A02ChildGetParentDataComponent', () => {
  let component: A02ChildGetParentDataComponent;
  let fixture: ComponentFixture<A02ChildGetParentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A02ChildGetParentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A02ChildGetParentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
