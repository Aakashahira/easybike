import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesDescriptionComponent } from './accessories-description.component';

describe('AccessoriesDescriptionComponent', () => {
  let component: AccessoriesDescriptionComponent;
  let fixture: ComponentFixture<AccessoriesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
