import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-service-queues',
  templateUrl: './service-queues.component.html',
  styleUrls: ['./service-queues.component.less'],
})
export class ServiceQueuesComponent {
  tableColumns: string[] = ["Structure's name"];
  tableData: any[] = [
    { name: 'Only clinical lab tests'},
    { name: 'Only image'},
    { name: 'Diagnostic center' },
    // ... more data items
  ];
}
