import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketsActivosComponent } from './listar-tickets-activos.component';

describe('ListarTicketsActivosComponent', () => {
  let component: ListarTicketsActivosComponent;
  let fixture: ComponentFixture<ListarTicketsActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTicketsActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTicketsActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
