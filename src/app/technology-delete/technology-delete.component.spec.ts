import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDeleteComponent } from './technology-delete.component';

describe('TechnologyDeleteComponent', () => {
  let component: TechnologyDeleteComponent;
  let fixture: ComponentFixture<TechnologyDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
