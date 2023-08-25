import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-access-profiles',
  templateUrl: './access-profiles.component.html',
  styleUrls: ['./access-profiles.component.less'],
})
export class AccessProfilesComponent {
  tableColumns: string[] = ['Access profiles'];
  tableFields: string[] = ['accessProfiles']
  tableData: any[] = [
    { accessProfiles: 'Nurse' ,status:true},
    { accessProfiles: 'I.T.' ,status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }

  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.accessProfiles.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  
  
 
}

