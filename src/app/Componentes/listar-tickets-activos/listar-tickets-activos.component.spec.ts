import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarTicketsActivosComponent } from './listar-tickets-activos.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ListarTicketsActivosComponent', () => {
  let component: ListarTicketsActivosComponent;
  let fixture: ComponentFixture<ListarTicketsActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTicketsActivosComponent ], imports:  [BrowserAnimationsModule,HttpClientModule,TableModule,FormsModule, ReactiveFormsModule, ToastrModule.forRoot({
        preventDuplicates: true
      })]
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
