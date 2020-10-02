import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextActionsComponent } from './next-actions.component';

describe('NextActionsComponent', () => {
  let component: NextActionsComponent;
  let fixture: ComponentFixture<NextActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
