import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Produtos } from '../Models/Produtos';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = `${environment.apiUrl}/Produto`

  constructor(private http: HttpClient) { }

  
  GetProdutos(): Observable<Response<Produtos[]>> {
    return this.http.get<Response<Produtos[]>>(this.apiUrl)
   }
 
   CreateProduto(produto: Produtos): Observable<Response<Produtos[]>> {
    console.log(1);
     return this.http.post<Response<Produtos[]>>(`${this.apiUrl}`, produto)
   }

   GetProduto(id: number): Observable<Response<Produtos>>{
     return this.http.get<Response<Produtos>>(`${this.apiUrl}/${id}`)
   }
 
   EditarProduto(produto: Produtos): Observable<Response<Produtos[]>> {
     return this.http.put<Response<Produtos[]>>(`${this.apiUrl}`, produto)
   }
 
   ExcluirProduto(id : number): Observable<Response<Produtos[]>> {
     return this.http.delete<Response<Produtos[]>>(`${this.apiUrl}?id=${id}`);
   }
}