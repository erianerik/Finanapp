import { environment } from '../../../environments/environment';
import { Usuario } from '../../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/Login';
import { Perfil } from 'src/app/model/Perfil';
import { DadosPerfil } from 'src/app/model/DadosPerfil';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/usuario';
  private autenticarUsuarioUrl = '/autenticarUsuario'

  constructor(
    private httpCliente: HttpClient,
  ) { }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.post<Usuario>(this.baseUrl, usuario);
  }

  logarUsuario(login: Login): Observable<any> {
    return this.httpCliente.post<Login>(this.baseUrl.concat(this.autenticarUsuarioUrl), login);
  }

  buscarDadosPerfilUsuario(idUsuario: any): Observable<any> {
    return this.httpCliente.get<DadosPerfil>(this.baseUrl.concat("/", idUsuario));
  }
}
