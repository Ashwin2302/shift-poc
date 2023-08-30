import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-templates-of-kiosk',
  templateUrl: './templates-of-kiosk.component.html',
  styleUrls: ['./templates-of-kiosk.component.less'],
})
export class TemplatesOfKioskComponent {
  // tableColumns: string[] = ["Template's name"];
  tableColumns:any = [
    {name:"Template's name",sortAccess:true},
    // {name:"Status",filterAccess:true}
  ];

  tableFields: string[] = ['templatesName']
  tableData: any[] = [
    { templatesName: 'Labshift',status:true},
    { templatesName: 'Labshift - clinicas',status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }
  constructor(private i18n: NzI18nService) { 
    this.i18n.setLocale(en_US); 
    }
  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.templatesName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}