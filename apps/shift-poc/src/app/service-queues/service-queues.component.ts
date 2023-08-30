import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-service-queues',
  templateUrl: './service-queues.component.html',
  styleUrls: ['./service-queues.component.less'],
})
export class ServiceQueuesComponent {
  // tableColumns: string[] = ["Structure's name"];
  tableColumns:any = [
    {name:"Structure's name",sortAccess:true},
    // {name:"Status",filterAccess:true}
  ];

  tableFields: string[] = ['structuresName']
  tableData: any[] = [
    { structuresName: 'Only clinical lab tests',status:true},
    { structuresName: 'Only image',status:true},
    { structuresName: 'Diagnostic center',status:true},
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
      item.structuresName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}