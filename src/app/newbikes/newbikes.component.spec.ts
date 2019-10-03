import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbikesComponent } from './newbikes.component';

describe('NewbikesComponent', () => {
  let component: NewbikesComponent;
  let fixture: ComponentFixture<NewbikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
