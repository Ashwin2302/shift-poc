// custom-button.component.ts
import { Component, Input } from '@angular/core';
import { NzButtonType, NzButtonSize } from 'ng-zorro-antd/button';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.less']
})
export class CustomButtonComponent {
  @Input() label: string = 'Button';
  @Input() buttonType: NzButtonType = 'default'; 
  @Input() buttonSize: NzButtonSize = 'default'; 
  @Input() buttonClass: string = '';
}