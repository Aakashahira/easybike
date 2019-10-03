import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewOrdersComponent } from './admin-view-orders.component';

describe('AdminViewOrdersComponent', () => {
  let component: AdminViewOrdersComponent;
  let fixture: ComponentFixture<AdminViewOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
