import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSessionComponent } from './calculate-session.component';

describe('CalculateSessionComponent', () => {
  let component: CalculateSessionComponent;
  let fixture: ComponentFixture<CalculateSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
