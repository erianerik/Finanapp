import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Custo } from 'src/app/model/Custo';
import { ItensHome } from 'src/app/model/ItensHome';

@Injectable({
  providedIn: 'root'
})
export class CustoService {

  private baseUrl = 'http://localhost:8080/custos';
  private buscarCustoUrl = 'buscar';

  constructor(
    private _httpCliente: HttpClient
  ) { }

  cadastrarCusto(custoViewModel: Custo): Observable<Custo> {
    return this._httpCliente.post<Custo>(this.baseUrl, custoViewModel);
  }

  buscarCustos(idUsuario: any): Observable<ItensHome> {
    return this._httpCliente.get<ItensHome>(this.baseUrl.concat("/" + idUsuario));
  }

  buscarCustoId(idUsuario: any, idCusto: number): Observable<Custo> {
    return this._httpCliente.get<Custo>(`${this.baseUrl}/${idUsuario}/${this.buscarCustoUrl}/${idCusto}`);
  }
}
