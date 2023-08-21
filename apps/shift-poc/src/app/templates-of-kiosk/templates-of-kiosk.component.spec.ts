import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesOfKioskComponent } from './templates-of-kiosk.component';

describe('TemplatesOfKioskComponent', () => {
  let component: TemplatesOfKioskComponent;
  let fixture: ComponentFixture<TemplatesOfKioskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesOfKioskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplatesOfKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
