import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Response } from '../Models/Response';
import { Pedidos } from '../Models/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = `${environment.apiUrl}/Pedido`
  
  constructor(private http: HttpClient) { }

  GetPedidos(): Observable<Response<Pedidos[]>> {
    return this.http.get<Response<Pedidos[]>>(this.apiUrl)
   }
 
   CreatePedido(pedido: Pedidos): Observable<Response<Pedidos[]>> {
     return this.http.post<Response<Pedidos[]>>(`${this.apiUrl}`, pedido)
   }

   GetPedido(id: number): Observable<Response<Pedidos>>{
     return this.http.get<Response<Pedidos>>(`${this.apiUrl}/${id}`)
   }
 
   EditarPedido(pedido: Pedidos): Observable<Response<Pedidos[]>> {
     return this.http.put<Response<Pedidos[]>>(`${this.apiUrl}`, pedido)
   }
 
   ExcluirPedido(id : number): Observable<Response<Pedidos[]>> {
     return this.http.delete<Response<Pedidos[]>>(`${this.apiUrl}?id=${id}`);
   }
}