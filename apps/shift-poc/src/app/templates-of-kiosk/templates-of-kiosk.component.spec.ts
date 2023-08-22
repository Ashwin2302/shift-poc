import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesOfKioskComponent } from './templates-of-kiosk.component';

describe('TemplatesOfKioskComponent', () => {
  let component: TemplatesOfKioskComponent;
  let fixture: ComponentFixture<TemplatesOfKioskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesOfKioskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplatesOfKioskComponent);
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
    const searchText = component.tableData[0].templatesName; // Use the first entry's accessProfiles value
    component.onSearchTextChange(searchText);
    const filteredItems = component.tableData.filter(item =>
      item.templatesName.toLowerCase().includes(searchText.toLowerCase())
    );
    expect(component.filteredTableData).toEqual(filteredItems);
  });

  it('should not change filteredTableData when search text is empty', () => {
    const initialData = [...component.filteredTableData];
    component.onSearchTextChange('');
    expect(component.filteredTableData).toEqual(initialData);
  });
});

