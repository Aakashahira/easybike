import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderForAllComponent } from './slider-for-all.component';

describe('SliderForAllComponent', () => {
  let component: SliderForAllComponent;
  let fixture: ComponentFixture<SliderForAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderForAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
