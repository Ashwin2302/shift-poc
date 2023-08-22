import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPrioritiesComponent } from './ticket-priorities.component';

describe('TicketPrioritiesComponent', () => {
  let component: TicketPrioritiesComponent;
  let fixture: ComponentFixture<TicketPrioritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketPrioritiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketPrioritiesComponent);
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
    const searchText = component.tableData[0].priority; // Use the first entry's accessProfiles value
    component.onSearchTextChange(searchText);
    const filteredItems = component.tableData.filter(item =>
      item.priority.toLowerCase().includes(searchText.toLowerCase())
    );
    expect(component.filteredTableData).toEqual(filteredItems);
  });

  it('should not change filteredTableData when search text is empty', () => {
    const initialData = [...component.filteredTableData];
    component.onSearchTextChange('');
    expect(component.filteredTableData).toEqual(initialData);
  });
});

