import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarTicketComponent } from './registrar-ticket.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrarTicketComponent', () => {
  let component: RegistrarTicketComponent;
  let fixture: ComponentFixture<RegistrarTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTicketComponent ],imports:  [BrowserAnimationsModule,HttpClientModule,TableModule,FormsModule, ReactiveFormsModule, ToastrModule.forRoot({
        preventDuplicates: true
      })]
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
