import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsedBikesComponent } from './view-used-bikes.component';

describe('ViewUsedBikesComponent', () => {
  let component: ViewUsedBikesComponent;
  let fixture: ComponentFixture<ViewUsedBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsedBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsedBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
