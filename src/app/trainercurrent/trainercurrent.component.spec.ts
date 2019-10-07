import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainercurrentComponent } from './trainercurrent.component';

describe('TrainercurrentComponent', () => {
  let component: TrainercurrentComponent;
  let fixture: ComponentFixture<TrainercurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainercurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainercurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
