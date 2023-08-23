import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'config-head',
  templateUrl: './config-head.component.html',
  styleUrls: ['./config-head.component.less'],
})
export class ConfigHeadComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() title = '';
  @Input() subtitle = '';

}
