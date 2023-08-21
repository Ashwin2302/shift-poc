import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-clinical-settings',
  templateUrl: './clinical-settings.component.html',
  styleUrls: ['./clinical-settings.component.less'],
})
export class ClinicalSettingsComponent {
  tableColumns: string[] = ['Clinical Setting','Queues Structure'];
  tableData: any[] = [
    { name: 'Head' },
    { name: 'Sao Miguel'},
    // ... more data items
  ];
}
