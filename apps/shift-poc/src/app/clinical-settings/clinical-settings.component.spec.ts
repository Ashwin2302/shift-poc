import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalSettingsComponent } from './clinical-settings.component';

describe('ClinicalSettingsComponent', () => {
  let component: ClinicalSettingsComponent;
  let fixture: ComponentFixture<ClinicalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicalSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
