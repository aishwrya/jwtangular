import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlandComponent } from './userland.component';

describe('UserlandComponent', () => {
  let component: UserlandComponent;
  let fixture: ComponentFixture<UserlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
