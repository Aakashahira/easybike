import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBikesDescriptionComponent } from './new-bikes-description.component';

describe('NewBikesDescriptionComponent', () => {
  let component: NewBikesDescriptionComponent;
  let fixture: ComponentFixture<NewBikesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBikesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBikesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
