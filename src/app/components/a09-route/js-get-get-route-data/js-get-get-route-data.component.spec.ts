import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsGetGetRouteDataComponent } from './js-get-get-route-data.component';

describe('JsGetGetRouteDataComponent', () => {
  let component: JsGetGetRouteDataComponent;
  let fixture: ComponentFixture<JsGetGetRouteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsGetGetRouteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsGetGetRouteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
