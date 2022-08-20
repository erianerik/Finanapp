import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Login } from 'src/app/model/Login';
import { SessionStorageService } from 'src/app/service/sessionStorage/session-storage.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = new Login();

  constructor(
    private router: Router,
    private _sessionStorage: SessionStorageService,
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() { }

  async logForm(loginForm: any) {
    this._usuarioService.logarUsuario(loginForm.value).subscribe((result) => {
      if (result.isAutenticado === false) { return; }
      this._sessionStorage.adicionarItemSession(result.idUsuario);
      this.router.navigate(['profile']);
    });
  }

  navigateRegister() {
    this.router.navigate(['register-login']);
  }

}
