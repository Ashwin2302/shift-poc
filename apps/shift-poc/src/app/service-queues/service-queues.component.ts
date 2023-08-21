import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-service-queues',
  templateUrl: './service-queues.component.html',
  styleUrls: ['./service-queues.component.less'],
})
export class ServiceQueuesComponent {
  tableColumns: string[] = ["Structure's name"];
  tableFields: string[] = ['structuresName']
  tableData: any[] = [
    { structuresName: 'Only clinical lab tests',status:true},
    { structuresName: 'Only image',status:true},
    { structuresName: 'Diagnostic center',status:true},
  ];
}
