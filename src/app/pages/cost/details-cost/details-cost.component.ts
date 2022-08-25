import { Component, OnDestroy, OnInit } from '@angular/core';
import { Custo } from 'src/app/model/Custo';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';

@Component({
  selector: 'details-cost',
  templateUrl: './details-cost.component.html',
  styleUrls: ['./details-cost.component.scss'],
})
export class DetailsCostComponent implements OnInit, OnDestroy {

  custo = new Custo();
  showDetail = false;
  isUpdate = false;
  idUsuario;

  constructor(
    private _broadcast: BroadcastService,
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService
  ) {
    this._broadcast.detailSubjetct.subscribe((idCusto: number) => {
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
    this.showDetail = false;
  }

  async carregarIdUsuario() {
    this.idUsuario = await this._sessionStorageService.getSession();
  }

  carregarCusto(idCusto: number) {
    this._custoService.buscarCustoId(this.idUsuario, idCusto).subscribe(((result:Custo)  => this.custo = result));
  }

  atualizarCusto(form: any) {
    this.custo.idUsuario = this.idUsuario;
    this._custoService.atualizarCusto(this.custo).subscribe((result => {
      console.log(result);
    }))
  }

  showUpdate(isUpdate: boolean) {
    this.isUpdate = isUpdate;
  }

}
