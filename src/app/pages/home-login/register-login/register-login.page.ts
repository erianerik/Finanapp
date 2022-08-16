import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.page.html',
  styleUrls: ['./register-login.page.scss'],
})
export class RegisterLoginPage implements OnInit {


  cadastroForm: FormGroup;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.criarFormGrupo();
  }

  criarFormGrupo() {
    this.cadastroForm = new FormGroup({
      usuario: new FormControl(''),
      email: new FormControl(''),
      salario: new FormControl(''),
      dinheiroGuardado: new FormControl(''),
      confirmarSenha: new FormControl(''),
      senha: new FormControl('')
    });
  }

  montarCadastroUsuario(): Usuario {
    let usuario = new Usuario();
    const cadastroForm = this.cadastroForm.controls;

    usuario.nome = cadastroForm.usuario.value;
    usuario.salario = cadastroForm.salario.value;
    usuario.dinheiroGuardado = cadastroForm.dinheiroGuardado.value;
    usuario.perfil.email = cadastroForm.email.value;
    usuario.perfil.senha = cadastroForm.senha.value;
    return usuario;
  }

  cadastrarUsuario() {
    this._usuarioService.cadastrarUsuario(this.montarCadastroUsuario()).subscribe((status: any) => {
      if (status === true) this._router.navigate(['home-app'])
    });
  }
}
