import { environment } from '../../../environments/environment';
import { Usuario } from '../../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/Login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/usuario';
  private urlLogin = '/logar'
  constructor(
    private httpCliente: HttpClient,
  ) { }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.post<Usuario>(environment.homologation.concat(this.baseUrl), usuario);
  }

  logarUsuario(login: Login): Observable<any> {
    return this.httpCliente.post<Login>(this.baseUrl.concat(this.urlLogin), login);
  }
}
