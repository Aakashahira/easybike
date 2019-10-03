import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerAddBikesComponent } from './dealer-add-bikes.component';

describe('DealerAddBikesComponent', () => {
  let component: DealerAddBikesComponent;
  let fixture: ComponentFixture<DealerAddBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerAddBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerAddBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
