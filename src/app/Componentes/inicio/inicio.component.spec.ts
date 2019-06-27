import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { InicioComponent } from './inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioComponent ], imports:  [BrowserAnimationsModule,HttpClientModule,TableModule,FormsModule, ReactiveFormsModule, ToastrModule.forRoot({
        preventDuplicates: true
      })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
