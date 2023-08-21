import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessProfilesComponent } from './access-profiles.component';

describe('AccessProfilesComponent', () => {
  let component: AccessProfilesComponent;
  let fixture: ComponentFixture<AccessProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessProfilesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
