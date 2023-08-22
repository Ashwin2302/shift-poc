import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesComponent } from './devices.component';

describe('DevicesComponent', () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevicesComponent);
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
    const searchText = component.tableData[0].deviceName; // Use the first entry's accessProfiles value
    component.onSearchTextChange(searchText);
    const filteredItems = component.tableData.filter(item =>
      item.deviceName.toLowerCase().includes(searchText.toLowerCase())
    );
    expect(component.filteredTableData).toEqual(filteredItems);
  });

  it('should not change filteredTableData when search text is empty', () => {
    const initialData = [...component.filteredTableData];
    component.onSearchTextChange('');
    expect(component.filteredTableData).toEqual(initialData);
  });
});
