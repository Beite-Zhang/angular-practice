import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A03ParentGetChildDataComponent } from './a03-parent-get-child-data.component';

describe('A03ParentGetChildDataComponent', () => {
  let component: A03ParentGetChildDataComponent;
  let fixture: ComponentFixture<A03ParentGetChildDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A03ParentGetChildDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A03ParentGetChildDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
