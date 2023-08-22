import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less'],
})
export class DevicesComponent {
  tableColumns: string[] = ['Device name','Device type','Clinical setting','Action situation'];
  tableFields: string[] = ['deviceName', 'deviceType','clinicalSetting','actionSituation']
  tableData: any[] = [
    { deviceName:'Matriz - Coleta', deviceType:'Coleta',clinicalSetting:'Matriz',actionSituation:'Not generated',status:true},
    { deviceName:'Matriz - Totern', deviceType:'Totern',clinicalSetting:'Matriz',actionSituation:'Waiting',status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }

  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.deviceName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}