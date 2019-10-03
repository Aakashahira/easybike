import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDealersComponent } from './admin-view-dealers.component';

describe('AdminViewDealersComponent', () => {
  let component: AdminViewDealersComponent;
  let fixture: ComponentFixture<AdminViewDealersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewDealersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
