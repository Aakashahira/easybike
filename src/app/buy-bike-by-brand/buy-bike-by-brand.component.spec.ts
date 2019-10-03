import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBikeByBrandComponent } from './buy-bike-by-brand.component';

describe('BuyBikeByBrandComponent', () => {
  let component: BuyBikeByBrandComponent;
  let fixture: ComponentFixture<BuyBikeByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBikeByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBikeByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
