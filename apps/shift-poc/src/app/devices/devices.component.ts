import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less'],
})
export class DevicesComponent {
  // tableColumns: string[] = ['Device name','Device type','Clinical setting','Action situation'];
  tableColumns:any = [
    {name:"Device name",sortAccess:true},
    {name:"Device type",sortAccess:true,filterAccess:true},
    {name:"Clinical setting"},
    {name:"Action situation",filterAccess:true},
    // {name:"Status",filterAccess:true}
  ];

  tableFields: string[] = ['deviceName', 'deviceType','clinicalSetting','actionSituation']
  tableData: any[] = [
    { deviceName:'Matriz - Coleta', deviceType:'Coleta',clinicalSetting:'Matriz',actionSituation:'Not generated',status:true},
    { deviceName:'Matriz - Totern', deviceType:'Totern',clinicalSetting:'Matriz',actionSituation:'Waiting',status:true},
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
      item.deviceName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}