import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit{
  @Input() columns: string[] = [];
  @Input() dataSet: any[] = [];
  @Input() tableFields: string[] = [];
  switchValue = false;
  loading = false;
  popover =false;
  
  
  
  ngOnInit(): void {
    console.log("columns---------------__>",this.columns)
    console.log("data set---------------__>",this.dataSet)
    console.log("table field",this.tableFields)

  }
}
