import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeByBrandComponent } from './bike-by-brand.component';

describe('BikeByBrandComponent', () => {
  let component: BikeByBrandComponent;
  let fixture: ComponentFixture<BikeByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
