import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOldBikeComponent } from './sell-old-bike.component';

describe('SellOldBikeComponent', () => {
  let component: SellOldBikeComponent;
  let fixture: ComponentFixture<SellOldBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOldBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOldBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
