import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent{
  // tableColumns: string[] = ['Full name','Username (login)','Access profile'];
  tableColumns:any = [
    {name:"Full name",sortAccess:true},
    {name:"Username (login)",sortAccess:true},
    {name:"Access profile",sortAccess:true,filterAccess:true},
    // {name:"Status",filterAccess:true}
  ];

  tableFields: string[] = ['fullName','userName','accessProfile']
  tableData: any[] = [
    { fullName: 'John Brito',userName:'John',accessProfile:'Receptionist',status:true},
    { fullName: 'Maria John',userName:'Maria',accessProfile:'HealthCareProvide',status:true},
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
      item.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}