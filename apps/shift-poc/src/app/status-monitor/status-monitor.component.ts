import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-status-monitor',
  templateUrl: './status-monitor.component.html',
  styleUrls: ['./status-monitor.component.less'],
})
export class StatusMonitorComponent {
  tableColumns: string[] = ["Template's name"];
  tableFields: string[] = ['templatesName']
  tableData: any[] = [
    { templatesName: 'Labshift',status:true},
    { templatesName: 'Labshift - clinicas',status:true},
  ];
}
