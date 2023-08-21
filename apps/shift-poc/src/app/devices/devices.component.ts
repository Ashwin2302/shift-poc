import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less'],
})
export class DevicesComponent {
  tableColumns: string[] = ['Device name','Device type','Clinical setting','Action situation'];
  tableData: any[] = [
    { name: 'Product1'},
    { name: 'Product2'},
    // ... more data items
  ];
}
