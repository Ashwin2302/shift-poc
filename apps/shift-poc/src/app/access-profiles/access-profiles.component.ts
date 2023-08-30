import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-access-profiles',
  templateUrl: './access-profiles.component.html',
  styleUrls: ['./access-profiles.component.less'],
})
export class AccessProfilesComponent {
  // tableColumns: string[] = ['Access profiles'];
  tableColumns:any = [
    {name:"Access profiles",sortAccess:true},
    // {name:"Status",filterAccess:true}
    
  ];
  

  tableFields: string[] = ['accessProfiles']
  tableData: any[] = [
    { accessProfiles: 'Nurse' ,status:true},
    { accessProfiles: 'I.T.' ,status:true},
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
      item.accessProfiles.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  
  
 
}

