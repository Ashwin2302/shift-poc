import { Component } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-ticket-priorities',
  templateUrl: './ticket-priorities.component.html',
  styleUrls: ['./ticket-priorities.component.less'],
})
export class TicketPrioritiesComponent {
  tableColumns: string[] = ['Priority','Acronym','Preferential','Color','Order'];
  tableFields: string[] = ['priority','acronym','preferential','color','order']
  tableData: any[] = [
    { priority: 'Elderly',acronym:'ELD',preferential:'Yes',color:'yellow',order:'1',status:true},
    { priority: 'Regular',acronym:'RED',preferential:'NO',color:'blue',order:'6',status:true},
  ];
  filteredTableData: any[] = [];

  ngOnInit(): void {
    this.filteredTableData = [...this.tableData];
  }

  onSearchTextChange(searchText: string): void {
    this.filteredTableData = this.tableData.filter(item =>
      item.priority.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}