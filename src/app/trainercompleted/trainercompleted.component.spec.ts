import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainercompletedComponent } from './trainercompleted.component';

describe('TrainercompletedComponent', () => {
  let component: TrainercompletedComponent;
  let fixture: ComponentFixture<TrainercompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainercompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainercompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
