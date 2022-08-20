import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DadosPerfil } from 'src/app/model/DadosPerfil';
import { SessionStorageService } from 'src/app/service/sessionStorage/session-storage.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  dadosPerfil: DadosPerfil;
  idUsuario;
  isUpdate = false;

  constructor(
    private _usuarioService: UsuarioService,
    private _sessionStorage: SessionStorageService,
  ) { }

  ngOnInit() {
    this.carregarSessionStorage();
    setTimeout(() => this.carregarDadosPerfil(), 3000);
    console.log('Dados usuário: ', this.dadosPerfil);

  }

  async carregarSessionStorage() {
    this.idUsuario = await this._sessionStorage.getSession();
  }

  carregarDadosPerfil() {
    console.log(this.idUsuario);
    this._usuarioService.buscarDadosPerfilUsuario(this.idUsuario).subscribe((dadosPerfil => {
      this.dadosPerfil = dadosPerfil;
      console.log('dadosPerfil', dadosPerfil);
    }));
  }

  update() {
    this.isUpdate = !this.isUpdate;
  }

}
