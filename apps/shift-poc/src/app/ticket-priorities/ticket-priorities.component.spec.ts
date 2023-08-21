import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPrioritiesComponent } from './ticket-priorities.component';

describe('TicketPrioritiesComponent', () => {
  let component: TicketPrioritiesComponent;
  let fixture: ComponentFixture<TicketPrioritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketPrioritiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketPrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
