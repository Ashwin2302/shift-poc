import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-status-monitor',
  templateUrl: './status-monitor.component.html',
  styleUrls: ['./status-monitor.component.less'],
})
export class StatusMonitorComponent {
  tableColumns: string[] = ["Template's name"];
  tableData: any[] = [
    { name: 'P1'},
    { name: 'Product2'},
    // ... more data items
  ];
}
