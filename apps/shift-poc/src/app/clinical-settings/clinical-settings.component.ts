import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-clinical-settings',
  templateUrl: './clinical-settings.component.html',
  styleUrls: ['./clinical-settings.component.less'],
})
export class ClinicalSettingsComponent {
  // tableColumns: string[] = ['Clinical Setting','Queues Structure'];
  tableColumns:any = [
    {name:"Clinical Setting",sortAccess:true},
    {name:"Queues Structure",sortAccess:true},
    // {name:"Status",filterAccess:true}
  ];

  tableFields: string[] = ['clinincalSetting', 'queuesStructure']
  tableData: any[] = [
    { clinincalSetting: 'Head',queuesStructure:'Diagnostic test',status:true},
    { clinincalSetting: 'Sao Miguel',queuesStructure:'Only clinical lab test',status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }
  constructor(private i18n: NzI18nService) { 
    this.i18n.setLocale(en_US); 
    }
  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.clinincalSetting.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

