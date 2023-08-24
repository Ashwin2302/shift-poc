import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigHeadComponent } from './config-head.component';

describe('ConfigHeadComponent', () => {
  let component: ConfigHeadComponent;
  let fixture: ComponentFixture<ConfigHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigHeadComponent,
        ],
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
