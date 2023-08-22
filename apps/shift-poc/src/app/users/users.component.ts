import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent{
  tableColumns: string[] = ['Full name','Username (login)','Access profile'];
  tableFields: string[] = ['fullName','userName','accessProfile']
  tableData: any[] = [
    { fullName: 'John Brito',userName:'John',accessProfile:'Receptionist',status:true},
    { fullName: 'Maria John',userName:'Maria',accessProfile:'HealthCareProvide',status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }

  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}