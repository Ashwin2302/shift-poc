import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-clinical-settings',
  templateUrl: './clinical-settings.component.html',
  styleUrls: ['./clinical-settings.component.less'],
})
export class ClinicalSettingsComponent {
  tableColumns: string[] = ['Clinical Setting','Queues Structure'];
  tableFields: string[] = ['clinincalSetting', 'queuesStructure']
  tableData: any[] = [
    { clinincalSetting: 'Head',queuesStructure:'Diagnostic test',status:true},
    { clinincalSetting: 'Sao Miguel',queuesStructure:'Only clinical lab test',status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }

  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.clinincalSetting.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

