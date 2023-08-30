import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-reasons-for-actions',
  templateUrl: './reasons-for-actions.component.html',
  styleUrls: ['./reasons-for-actions.component.less'],
})
export class ReasonsForActionsComponent {
  // tableColumns: string[] = ['Reason','Purpose'];
  tableColumns:any = [
    {name:"Reason",sortAccess:true},
    {name:"Purpose",sortAccess:true,filterAccess:true},
    // {name:"Status",filterAccess:true}
  ];

  tableFields: string[] = ['reason','purpose']
  tableData: any[] = [
    { reason: 'Patient with more than one ticket',purpose:'dropout',status:true},
    { reason: 'Crowded',purpose:'cancelling',status:true},
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
      item.reason.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
