import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedBikeDescriptionComponent } from './used-bike-description.component';

describe('UsedBikeDescriptionComponent', () => {
  let component: UsedBikeDescriptionComponent;
  let fixture: ComponentFixture<UsedBikeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedBikeDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedBikeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
