import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReviewComponent } from './weekly-review.component';

describe('WeeklyReviewComponent', () => {
  let component: WeeklyReviewComponent;
  let fixture: ComponentFixture<WeeklyReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
