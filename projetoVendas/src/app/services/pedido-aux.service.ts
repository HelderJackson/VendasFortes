import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoAux } from '../Models/PedidoAux';
import { Response } from '../Models/Response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PedidoAuxService {

  private apiUrl = `${environment.apiUrl}/Pedido`
  
  constructor(private http: HttpClient) { }

  GetPedidos(): Observable<Response<PedidoAux[]>> {
    return this.http.get<Response<PedidoAux[]>>(this.apiUrl)
   }
}
