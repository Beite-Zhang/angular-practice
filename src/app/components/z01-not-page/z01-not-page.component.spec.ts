import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z01NotPageComponent } from './z01-not-page.component';

describe('Z01NotPageComponent', () => {
  let component: Z01NotPageComponent;
  let fixture: ComponentFixture<Z01NotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z01NotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z01NotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
