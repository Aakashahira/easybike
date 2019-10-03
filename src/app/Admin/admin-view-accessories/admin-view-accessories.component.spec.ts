import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAccessoriesComponent } from './admin-view-accessories.component';

describe('AdminViewAccessoriesComponent', () => {
  let component: AdminViewAccessoriesComponent;
  let fixture: ComponentFixture<AdminViewAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
