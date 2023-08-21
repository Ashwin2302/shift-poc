import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-reasons-for-actions',
  templateUrl: './reasons-for-actions.component.html',
  styleUrls: ['./reasons-for-actions.component.less'],
})
export class ReasonsForActionsComponent {
  tableColumns: string[] = ['Reason','Purpose'];
  tableFields: string[] = ['reason','purpose']
  tableData: any[] = [
    { reason: 'Patient with more than one ticket',purpose:'dropout',status:true},
    { reason: 'Crowded',purpose:'cancelling',status:true},
  ];
}
