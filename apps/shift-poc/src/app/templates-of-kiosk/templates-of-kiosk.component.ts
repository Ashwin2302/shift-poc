import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-templates-of-kiosk',
  templateUrl: './templates-of-kiosk.component.html',
  styleUrls: ['./templates-of-kiosk.component.less'],
})
export class TemplatesOfKioskComponent {
  tableColumns: string[] = ["Template's name"];
  tableData: any[] = [
    { name: 'Product1'},
    { name: 'Product2'},
    // ... more data items
  ];
}
