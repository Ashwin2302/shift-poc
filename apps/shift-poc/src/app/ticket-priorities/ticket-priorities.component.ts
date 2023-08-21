import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-ticket-priorities',
  templateUrl: './ticket-priorities.component.html',
  styleUrls: ['./ticket-priorities.component.less'],
})
export class TicketPrioritiesComponent {
  tableColumns: string[] = ['Priority','Acronym','Preferential','Color','Order'];
  tableData: any[] = [
    { name: 'Product1'},
    { name: 'Product2'},
    // ... more data items
  ];
}
