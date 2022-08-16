import { environment } from '../../../environments/environment';
import { Usuario } from '../../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'usuario';

  constructor(
    private httpCliente: HttpClient,
  ) { }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.post<Usuario>(environment.homologation.concat(this.url), usuario);
  }
}
