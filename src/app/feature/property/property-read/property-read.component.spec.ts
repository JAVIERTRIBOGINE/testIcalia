import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyReadComponent } from './property-read.component';

describe('PropertyReadComponent', () => {
  let component: PropertyReadComponent;
  let fixture: ComponentFixture<PropertyReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyReadComponent],
    });
    fixture = TestBed.createComponent(PropertyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
