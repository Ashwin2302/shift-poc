import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzButtonType, NzButtonSize } from 'ng-zorro-antd/button';
import { CustomButtonComponent } from './custom-button.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomButtonComponent],
      imports: [NzButtonModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided label', () => {
    const label = 'Test Label';
    component.label = label;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('.custom-button')).nativeElement;
    expect(buttonElement.textContent).toContain(label);
  });

  it('should apply the provided button type', () => {
    const buttonType: NzButtonType = 'primary';
    component.buttonType = buttonType;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('.custom-button')).nativeElement;
    expect(buttonElement.classList).toContain(`ant-btn-${buttonType}`);
  });

  it('should apply the provided button size', () => {
    const buttonSize: NzButtonSize = 'large';
    component.buttonSize = buttonSize;
    fixture.detectChanges();
  
    const buttonElement = fixture.debugElement.query(By.css('.custom-button')).nativeElement;
    expect(buttonElement.classList).toContain(`ant-btn-lg`);
  });
  

  it('should apply the provided button class', () => {
    const buttonClass = 'custom-class';
    component.buttonClass = buttonClass;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('.custom-button')).nativeElement;
    expect(buttonElement.classList).toContain(buttonClass);
  });
});
