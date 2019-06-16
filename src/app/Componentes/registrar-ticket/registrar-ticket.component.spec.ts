import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTicketComponent } from './registrar-ticket.component';

describe('RegistrarTicketComponent', () => {
  let component: RegistrarTicketComponent;
  let fixture: ComponentFixture<RegistrarTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
