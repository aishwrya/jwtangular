import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprogressComponent } from './userprogress.component';

describe('UserprogressComponent', () => {
  let component: UserprogressComponent;
  let fixture: ComponentFixture<UserprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
