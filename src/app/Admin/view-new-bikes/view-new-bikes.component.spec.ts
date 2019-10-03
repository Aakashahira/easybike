import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewBikesComponent } from './view-new-bikes.component';

describe('ViewNewBikesComponent', () => {
  let component: ViewNewBikesComponent;
  let fixture: ComponentFixture<ViewNewBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
