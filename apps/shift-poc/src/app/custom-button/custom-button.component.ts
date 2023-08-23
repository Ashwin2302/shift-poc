import { Component, Input } from '@angular/core';
import { NzButtonType, NzButtonSize } from 'ng-zorro-antd/button';

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