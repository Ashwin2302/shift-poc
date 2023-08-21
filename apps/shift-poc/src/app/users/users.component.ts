import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent {
  tableColumns: string[] = ['Full name','Username (login)','Access profile'];
  tableData: any[] = [
    { name: 'Product1'},
    { name: 'Product2'},
    // ... more data items
  ];
}
