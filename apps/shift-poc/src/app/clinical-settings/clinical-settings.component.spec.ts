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

  it('should initialize filteredTableData with tableData', () => {
    expect(component.filteredTableData).toEqual(component.tableData);
  });

  it('should filter data based on search text', () => {
    const searchText = component.tableData[0].clinicalSetting; // Use the first entry's accessProfiles value
    component.onSearchTextChange(searchText);
    const filteredItems = component.tableData.filter(item =>
      item.clinincalSetting.toLowerCase().includes(searchText.toLowerCase())
    );
    expect(component.filteredTableData).toEqual(filteredItems);
  });

  it('should not change filteredTableData when search text is empty', () => {
    const initialData = [...component.filteredTableData];
    component.onSearchTextChange('');
    expect(component.filteredTableData).toEqual(initialData);
  });
});
