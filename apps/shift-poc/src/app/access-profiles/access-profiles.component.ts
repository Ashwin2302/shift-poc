import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-access-profiles',
  templateUrl: './access-profiles.component.html',
  styleUrls: ['./access-profiles.component.less'],
})
export class AccessProfilesComponent {
  tableColumns: string[] = ['Access profiles'];
  tableData: any[] = [
    { name: 'Product1' },
    { name: 'Product2' },
    // ... more data items
  ];
}
