import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit{
  @Input() tableColumns:any;
  @Input() listOfColumns1:any;
  @Input() dataSet: any[] = [];
  @Input() tableFields: string[] = [];
  switchValue = false;
  loading = false;
  popover =false;
  placement = 'bottom';
  
  filterAccess = [
    { text: 'Active', value: 'Active' },
    { text: 'Inactive', value: 'Inactive' }
  ];
  
  
  ngOnInit(): void {
    console.log("columns---------------__>",this.tableColumns);
    console.log("data set---------------__>",this.dataSet)
    console.log("table field",this.tableFields);

  }
  
  

  }
  