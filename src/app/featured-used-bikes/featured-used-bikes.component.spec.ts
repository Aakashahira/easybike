import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedUsedBikesComponent } from './featured-used-bikes.component';

describe('FeaturedUsedBikesComponent', () => {
  let component: FeaturedUsedBikesComponent;
  let fixture: ComponentFixture<FeaturedUsedBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedUsedBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedUsedBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
