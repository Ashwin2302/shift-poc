import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search text when performSearch is called', () => {
    const searchText = 'Sample search text';
    spyOn(component.searchTextChanged, 'emit');
    
    component.searchText = searchText;
    component.performSearch();

    expect(component.searchTextChanged.emit).toHaveBeenCalledWith(searchText);
  });

  it('should emit empty search text when performSearch is called with empty search text', () => {
    spyOn(component.searchTextChanged, 'emit');

    component.searchText = '';
    component.performSearch();

    expect(component.searchTextChanged.emit).toHaveBeenCalledWith('');
  });
});
