import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Usuario } from 'src/app/model/Usuario';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.page.html',
  styleUrls: ['./register-login.page.scss'],
})
export class RegisterLoginPage implements OnInit {
  cadastroForm: FormGroup;
  confirmarSenha: string;

  constructor(
    private _usuarioService: UsuarioService,
    private _sessionStorage: SessionStorageService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.criarFormGroup();
  }

  criarFormGroup() {
    this.cadastroForm = new FormGroup({
      usuario: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      cargo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      salario: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      dinheiroGuardado: new FormControl('', Validators.required),
      confirmarSenha: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  senhaValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value !== this.cadastroForm.controls.confirmarSenha.value ? { senhasInvalidas: control.value } : null;
  }

  validarSenha() {
    this.cadastroForm.controls.senha.addValidators(this.senhaValidator());
    this.cadastroForm.controls.senha.updateValueAndValidity();
  }

  montarCadastroUsuario(): Usuario {
    let usuario = new Usuario();
    const cadastroForm = this.cadastroForm.controls;

    usuario.nome = cadastroForm.usuario.value;
    usuario.cargo = cadastroForm.cargo.value;
    usuario.salario = cadastroForm.salario.value;
    usuario.dinheiroGuardado = cadastroForm.dinheiroGuardado.value;
    usuario.perfil.email = cadastroForm.email.value;
    usuario.perfil.senha = cadastroForm.senha.value;
    return usuario;
  }

  validarFormulario(): boolean {
    this.cadastroForm.markAllAsTouched();
    this.validarSenha();
    console.log(this.cadastroForm);
    return this.cadastroForm.valid;
  }

  cadastrarUsuario() {
    if (!this.validarFormulario()) { return; }
    BroadcastService.toggleLoading();

    this._usuarioService.cadastrarUsuario(this.montarCadastroUsuario()).subscribe((status: any) => {
      if (!status.ok) {
        BroadcastService.toggleLoading();
        return;
      }

      this._sessionStorage.adicionarItemSession(status.data.id);
      this._router.navigate(['/home-app']);
      BroadcastService.toggleLoading();
    });
  }
}
