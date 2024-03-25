import { TestBed } from '@angular/core/testing';

import { PedidoAuxService } from './pedido-aux.service';

describe('PedidoAuxService', () => {
  let service: PedidoAuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoAuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
