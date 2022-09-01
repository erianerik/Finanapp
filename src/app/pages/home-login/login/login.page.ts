import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Login } from 'src/app/model/Login';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formErro = { senhaPossuiErro: false, emailPossuiErro: false, emailSenhaInvalido: false }
  login = new Login();

  constructor(
    private router: Router,
    private _sessionStorage: SessionStorageService,
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() { }

  async logForm(loginForm: any) {
    if (this.validarFormulário()) { return; }
    BroadcastService.toggleLoading();
    this._usuarioService.logarUsuario(loginForm.value).subscribe((result) => {
      if (!result.autenticado) {
        this.formErro.emailPossuiErro = this.formErro.senhaPossuiErro = false;
        this.formErro.emailSenhaInvalido = true;
        BroadcastService.toggleLoading();
        return;
      }
      this._sessionStorage.adicionarItemSession(result.idUsuario);
      this.router.navigate(['/home-app']);
      BroadcastService.toggleLoading();
    });
  }

  validarFormulário() {
    this.formErro.emailPossuiErro = this.login.email === '' ? true : false;
    this.formErro.senhaPossuiErro = this.login.senha === '' ? true : false;
    return this.formErro.emailPossuiErro || this.formErro.senhaPossuiErro;
  }

  navigateRegister() {
    this.router.navigate(['/register-login']);
  }

}
