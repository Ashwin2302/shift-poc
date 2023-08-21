import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-reasons-for-actions',
  templateUrl: './reasons-for-actions.component.html',
  styleUrls: ['./reasons-for-actions.component.less'],
})
export class ReasonsForActionsComponent {
  tableColumns: string[] = ['Reason','Purpose'];
  tableData: any[] = [
    { name: 'Product1'},
    { name: 'Product2' },
    // ... more data items
  ];
}
