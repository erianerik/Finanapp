import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const ID_USUARIO = 'idUsuario';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(private _storage: Storage) {
    this.init();
  }

  init() {
    this._storage.create();
  }


  async limparSession() {
    return this._storage.clear();
  }
  getSession() {
    return this._storage.get(ID_USUARIO) || {};
  }

  async adicionarItemSession(item: any) {
    let itemGuardado = await this._storage.get(ID_USUARIO) || {};
    itemGuardado= item;
    return this._storage.set(ID_USUARIO, itemGuardado);
  }
}
