import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Custo } from 'src/app/model/Custo';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.page.html',
  styleUrls: ['./add-cost.page.scss'],
})
export class AddCostPage implements OnInit {

  custoForm: FormGroup;
  custo = new Custo();
  idUsuario: any;
  possuiParcela = false;

  constructor(
    private _sessionStorage: SessionStorageService,
    private _custoService: CustoService
  ) { }

  ngOnInit() {
    this.criarCustorFormBuilder();
    this.carregarSessionStorage();
  }
  async carregarSessionStorage() {
    this.idUsuario = await this._sessionStorage.getSession();
  }

  criarCustorFormBuilder() {
    this.custoForm = new FormGroup({
      valor: new FormControl('', Validators.required),
      data: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      descricao: new FormControl(''),
      custo: new FormControl(true),
      quantidade: new FormControl(''),
    });
  }

  exibirParcela() {
    this.possuiParcela = !this.possuiParcela;
  }

  adicionarCusto(custoForm: any) {
    if (!this.validarFormulario()) { return; }
    BroadcastService.toggleLoading();
    this.custo = this.custoForm.value as Custo;
    this.custo.idUsuario = this.idUsuario;
    this._custoService.cadastrarCusto(this.custo).subscribe(() => {
      this._custoService.atualizarDadosCusto();
      this.custoForm.reset();
      this.custoForm.controls.custo.setValue(true);
      this.custoForm.controls.tipo.setValue('selecione');
    });
    BroadcastService.toggleLoading();
  }

  formatarValorMonetario(formControlName: any) {
    const formControl = this.custoForm.get(formControlName);
    let valorMonetario = formControl.value;
    valorMonetario = valorMonetario + '';
    valorMonetario = parseInt(valorMonetario.replace(/[\D]+/g, ''));
    valorMonetario = valorMonetario + '';
    valorMonetario = valorMonetario.replace(/([0-9]{2})$/g, ",$1");

    if (valorMonetario.length > 6) {
      valorMonetario = valorMonetario.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    formControl.setValue(valorMonetario !== 'NaN' ? 'R$ ' + valorMonetario : '');
  }

  validarFormulario(): boolean {
    this.custoForm.markAllAsTouched();
    return this.custoForm.valid;
  }
}
