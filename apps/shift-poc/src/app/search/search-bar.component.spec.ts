import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [FormsModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search text when performSearch is called', () => {
    const searchText = 'Test Search Text';
    let emittedSearchText = '';

    component.searchTextChanged.subscribe((text) => {
      emittedSearchText = text;
    });

    component.searchText = searchText;
    component.performSearch();

    expect(emittedSearchText).toBe(searchText);
  });

  it('should display the provided placeholder', () => {
    const placeholder = 'Custom Placeholder';
    component.placeholder = placeholder;

    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    expect(inputElement.getAttribute('placeholder')).toBe(placeholder);
  });

  it('should update searchText when input value changes', () => {
    const inputValue = 'Test Input Value';
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.searchText).toBe(inputValue);
  });
});
