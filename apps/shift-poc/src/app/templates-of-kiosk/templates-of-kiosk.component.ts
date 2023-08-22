import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-templates-of-kiosk',
  templateUrl: './templates-of-kiosk.component.html',
  styleUrls: ['./templates-of-kiosk.component.less'],
})
export class TemplatesOfKioskComponent {
  tableColumns: string[] = ["Template's name"];
  tableFields: string[] = ['templatesName']
  tableData: any[] = [
    { templatesName: 'Labshift',status:true},
    { templatesName: 'Labshift - clinicas',status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }

  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.templatesName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}