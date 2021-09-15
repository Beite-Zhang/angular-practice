import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlGetRouteDataComponent } from './url-get-route-data.component';

describe('UrlGetRouteDataComponent', () => {
  let component: UrlGetRouteDataComponent;
  let fixture: ComponentFixture<UrlGetRouteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlGetRouteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlGetRouteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
