import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EstacionamientoService } from './estacionamiento.service';



describe('EstacionamientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: EstacionamientoService = TestBed.get(EstacionamientoService);
    expect(service).toBeTruthy();
  });
});
