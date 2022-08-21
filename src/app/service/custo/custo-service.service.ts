import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Custo } from 'src/app/model/Custo';

@Injectable({
  providedIn: 'root'
})
export class CustoServiceService {

  private baseUrl = 'http://localhost:8080/custos';

  constructor(
    private _httpCliente: HttpClient
  ) { }

  cadastrarCusto(custoViewModel: Custo): Observable<Custo> {
    return this._httpCliente.post<Custo>(this.baseUrl, custoViewModel);
  }
}
