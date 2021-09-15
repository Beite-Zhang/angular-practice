import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsUrlGetRouteDataComponent } from './js-url-get-route-data.component';

describe('JsUrlGetRouteDataComponent', () => {
  let component: JsUrlGetRouteDataComponent;
  let fixture: ComponentFixture<JsUrlGetRouteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsUrlGetRouteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsUrlGetRouteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
