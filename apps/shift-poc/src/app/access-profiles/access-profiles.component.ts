import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-access-profiles',
  templateUrl: './access-profiles.component.html',
  styleUrls: ['./access-profiles.component.less'],
})
export class AccessProfilesComponent {
  isVisible = false;
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
  
  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

