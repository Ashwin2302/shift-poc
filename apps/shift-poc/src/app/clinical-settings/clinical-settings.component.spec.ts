import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClinicalSettingsComponent } from './clinical-settings.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ClinicalSettingsComponent', () => {
  let component: ClinicalSettingsComponent;
  let fixture: ComponentFixture<ClinicalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicalSettingsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter table data based on search text', () => {
    const searchText = 'head';
    component.onSearchTextChange(searchText);

    expect(component.filteredTableData.length).toBe(1);
    expect(component.filteredTableData[0].clinincalSetting.toLowerCase()).toContain(searchText);
  });

  it('should filter table data case-insensitively', () => {
    const searchText = 'SAO MIGUEL';
    component.onSearchTextChange(searchText);

    expect(component.filteredTableData.length).toBe(1);
    expect(component.filteredTableData[0].clinincalSetting.toLowerCase()).toContain(searchText.toLowerCase());
  });

  it('should update filtered table data when search text changes', () => {
    const initialLength = component.filteredTableData.length;
    
    component.onSearchTextChange('head');
    expect(component.filteredTableData.length).toBe(1);
    
    component.onSearchTextChange('');
    expect(component.filteredTableData.length).toBe(initialLength);
  });
});
