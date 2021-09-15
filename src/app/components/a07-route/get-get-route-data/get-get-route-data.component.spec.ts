import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGetRouteDataComponent } from './get-get-route-data.component';

describe('GetGetRouteDataComponent', () => {
  let component: GetGetRouteDataComponent;
  let fixture: ComponentFixture<GetGetRouteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetGetRouteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGetRouteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
