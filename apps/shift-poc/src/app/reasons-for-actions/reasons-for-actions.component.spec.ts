import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsForActionsComponent } from './reasons-for-actions.component';

describe('ReasonsForActionsComponent', () => {
  let component: ReasonsForActionsComponent;
  let fixture: ComponentFixture<ReasonsForActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReasonsForActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReasonsForActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
