import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAccessoriesComponent } from './latest-accessories.component';

describe('LatestAccessoriesComponent', () => {
  let component: LatestAccessoriesComponent;
  let fixture: ComponentFixture<LatestAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
