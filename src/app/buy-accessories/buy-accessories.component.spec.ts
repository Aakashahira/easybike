import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAccessoriesComponent } from './buy-accessories.component';

describe('BuyAccessoriesComponent', () => {
  let component: BuyAccessoriesComponent;
  let fixture: ComponentFixture<BuyAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
