import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomedayMaybeComponent } from './someday-maybe.component';

describe('SomedayMaybeComponent', () => {
  let component: SomedayMaybeComponent;
  let fixture: ComponentFixture<SomedayMaybeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomedayMaybeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomedayMaybeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
