import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedores } from '../Models/Fornecedores';
import { Response } from '../Models/Response';


@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  private apiUrl = `${environment.apiUrl}/Fornecedor`
  
  constructor(private http: HttpClient) { }

  GetFornecedores(): Observable<Response<Fornecedores[]>> {
   return this.http.get<Response<Fornecedores[]>>(this.apiUrl)
  }

  CreateFornecedor(fornecedor: Fornecedores): Observable<Response<Fornecedores[]>> {
    return this.http.post<Response<Fornecedores[]>>(`${this.apiUrl}`, fornecedor)
  }

  GetFornecedor(id: number): Observable<Response<Fornecedores>>{
    return this.http.get<Response<Fornecedores>>(`${this.apiUrl}/${id}`)
  }

  EditarFornecedor(fornecedor: Fornecedores): Observable<Response<Fornecedores[]>> {
    return this.http.put<Response<Fornecedores[]>>(`${this.apiUrl}`, fornecedor)
  }

  ExcluirFornecedor(id : number): Observable<Response<Fornecedores[]>> {
    return this.http.delete<Response<Fornecedores[]>>(`${this.apiUrl}?id=${id}`);
  }
}