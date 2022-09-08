import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Custo } from 'src/app/model/Custo';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';
import { FormatadorUtils } from 'src/app/util/formatador-utils';

@Component({
  selector: 'details-cost',
  templateUrl: './details-cost.component.html',
  styleUrls: ['./details-cost.component.scss'],
})
export class DetailsCostComponent implements OnInit, OnDestroy {

  custo = new Custo();
  exibirLoading = false;
  showDetail = false;
  isUpdate = false;
  idUsuario;

  @Output() exibirSlide = new EventEmitter<boolean>();

  constructor(
    private _broadcast: BroadcastService,
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService
  ) {
    this._broadcast.detalheSubject.subscribe((idCusto: number) => {
      this.exibirLoading = true;
      this.showDetail = true;
      setTimeout(() => this.carregarCusto(idCusto), 550);
    });
  }

  ngOnInit() {
    this.carregarIdUsuario();
  }

  ngOnDestroy(): void {
    this.showDetail = false;
  }

  closeDetail(): void {
    this.exibirSlide.emit(true);
    this.showDetail = false;
    this.isUpdate = false;
  }

  async carregarIdUsuario() {
    this.idUsuario = await this._sessionStorageService.getSession();
  }

  carregarCusto(idCusto: number) {
    this._custoService.buscarCustoId(this.idUsuario, idCusto).subscribe(((result: any) => {
      this.custo = result.data as Custo;
      this.custo.icone = FormatadorUtils.icones[this.custo.tipo];
      this.custo.valor = this.custo.valor.substring(0, 0) + "R$" + this.custo.valor;
      this.exibirLoading = false;
    }));
  }

  atualizarCusto(form: any) {
    let custoRequest = this.custo;
    custoRequest.idUsuario = this.idUsuario;
    custoRequest.valor = custoRequest.valor.replace('R$', '').trim();
    this._custoService.atualizarCusto(custoRequest).subscribe((() => {
      this._custoService.atualizarDadosCusto();
      this.custo.icone = FormatadorUtils.icones[this.custo.tipo];
    }));
  }

  excluirCusto() {
    this._custoService.deletarCusto(this.idUsuario, this.custo.id).subscribe((result => {
      this.showDetail = result ? !this.showDetail : false;
      this.exibirSlide.emit(true);
      this._custoService.atualizarDadosCusto();
    }));
  }

  showUpdate(isUpdate: boolean) {
    this.isUpdate = isUpdate;
  }

  formatarValorMonetario() {
    let valorMonetario = this.custo.valor;
    valorMonetario = valorMonetario + '';
    valorMonetario = valorMonetario.replace(/[\D]+/g, '');
    valorMonetario = valorMonetario + '';
    valorMonetario = valorMonetario.replace(/([0-9]{2})$/g, ",$1");

    if (valorMonetario.length > 6) {
      valorMonetario = valorMonetario.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    this.custo.valor = valorMonetario !== 'NaN' ? 'R$ ' + valorMonetario : '';
  }

}
