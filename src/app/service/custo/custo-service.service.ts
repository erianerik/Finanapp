import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Custo } from 'src/app/model/Custo';
import { ItensHome } from 'src/app/model/ItensHome';
import { FormatadorUtils } from 'src/app/util/formatador-utils';

@Injectable({
  providedIn: 'root'
})
export class CustoService {

  public custoSubject = new Subject<boolean>();
  private baseUrl = 'http://localhost:8080/custos';
  private buscarCustoUrl = 'buscar';
  private excluirUrl = 'excluir';

  constructor(
    private _httpCliente: HttpClient
  ) { }

  atualizarDadosCusto() {
    return this.custoSubject.next(true);
  }

  cadastrarCusto(custoViewModel: Custo): Observable<Custo> {
    return this._httpCliente.post<Custo>(this.baseUrl, custoViewModel);
  }

  buscarCustos(idUsuario: any): Observable<ItensHome> {
    return this._httpCliente.get<ItensHome>(this.baseUrl.concat("/" + idUsuario));
  }

  buscarCustoId(idUsuario: any, idCusto: number): Observable<Custo> {
    return this._httpCliente.get<Custo>(`${this.baseUrl}/${idUsuario}/${this.buscarCustoUrl}/${idCusto}`);
  }

  atualizarCusto(custoViewModel: Custo): Observable<Custo> {
    return this._httpCliente.put<Custo>(this.baseUrl, custoViewModel);
  }

  deletarCusto(idUsuario: any, idCusto: number): Observable<Custo> {
    return this._httpCliente.delete<Custo>(`${this.baseUrl}/${idUsuario}/${this.excluirUrl}/${idCusto}`);
  }
}
