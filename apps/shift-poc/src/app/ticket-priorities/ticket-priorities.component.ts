import { Component } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nx-shiftworkspace-ticket-priorities',
  templateUrl: './ticket-priorities.component.html',
  styleUrls: ['./ticket-priorities.component.less'],
})
export class TicketPrioritiesComponent {
  // tableColumns: string[] = ['Priority','Acronym','Preferential','Color','Order'];
  tableColumns:any = [
    {name:"Priority",sortAccess:true},
    {name:"Acronym",sortAccess:true},
    {name:"Preferential"},
    {name:"Color"},
    {name:"Order",sortAccess:true},
    // {name:"Status",filterAccess:true}
  ]
  tableFields: string[] = ['priority','acronym','preferential','color','order']
  tableData: any[] = [
    { priority: 'Elderly',acronym:'ELD',preferential:'Yes',color:'yellow',order:'1',status:true},
    { priority: 'Regular',acronym:'RED',preferential:'NO',color:'blue',order:'6',status:true},
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
      item.priority.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  
}