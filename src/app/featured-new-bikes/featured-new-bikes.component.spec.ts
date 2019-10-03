import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedNewBikesComponent } from './featured-new-bikes.component';

describe('FeaturedNewBikesComponent', () => {
  let component: FeaturedNewBikesComponent;
  let fixture: ComponentFixture<FeaturedNewBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedNewBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedNewBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
