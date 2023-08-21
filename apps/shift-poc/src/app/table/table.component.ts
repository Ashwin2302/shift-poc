import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-shiftworkspace-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit{
  @Input() columns: string[] = [];
  @Input() dataSet: any[] = [];
  switchValue = false;
  loading = false;

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 3000);
    }
  }
  
  ngOnInit(): void {
    console.log("columns---------------__>",this.columns)
    console.log("data set---------------__>",this.dataSet)

  }
}
