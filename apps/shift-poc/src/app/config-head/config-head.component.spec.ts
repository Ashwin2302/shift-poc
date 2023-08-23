import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzAvatarComponent, NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDrawerComponent } from 'ng-zorro-antd/drawer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ConfigHeadComponent } from './config-head.component';

describe('ConfigHeadComponent', () => {
  let component: ConfigHeadComponent;
  let fixture: ComponentFixture<ConfigHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigHeadComponent,
        NzAvatarComponent,
        NzDrawerComponent],
      imports: [NzLayoutModule,
        NzAvatarModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
