import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerlandComponent } from './trainerland.component';

describe('TrainerlandComponent', () => {
  let component: TrainerlandComponent;
  let fixture: ComponentFixture<TrainerlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
