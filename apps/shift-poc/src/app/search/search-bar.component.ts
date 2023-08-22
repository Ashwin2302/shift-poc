import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search...';
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = '';

  performSearch(): void {
    this.searchTextChanged.emit(this.searchText);
  }
}
