import { Component, OnInit } from '@angular/core';
import { Estatistica } from 'src/app/model/Estatistica';
import { ItensHome } from 'src/app/model/ItensHome';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';
import { FormatadorUtils } from 'src/app/util/formatador-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  idUsuario: any;
  itensHome = new ItensHome();
  estatistica: Estatistica[] = [];

  constructor(
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService
  ) {
    this._custoService.custoSubject.subscribe(() => {
      this.carregarCustos(this.idUsuario);
      BroadcastService.toggleLoading();
    });
  }

  ngOnInit() {
    BroadcastService.toggleLoading();
    this.carregarIdUsuario();
    setTimeout(() => this.carregarCustos(this.idUsuario), 500);
  }

  async carregarIdUsuario() {
    this.idUsuario = await this._sessionStorageService.getSession();
  }

  carregarCustos(idUsuario: any) {
    this._custoService.buscarCustos(idUsuario).subscribe((result) => {
      this.itensHome = result as ItensHome;
      BroadcastService.toggleLoading();
      this.calcularEstatistica();
    });
  }

  calcularEstatistica() {
    this.estatistica = [];
    const custos = this.itensHome.custos;
    const custoTotal = parseFloat(this.itensHome.totalGasto.toString().replace(',', '.'));
    custos.forEach(custoItem => {
      if (!custoItem.custo) { return; }
      this.estatistica.push(new Estatistica(custoItem.tipo))
    });
    this.estatistica = this.estatistica.filter(function (a) {
      return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null));

    custos.forEach((custoItem) => {
      this.estatistica.map((estatistica) => {
        let valorItem = parseFloat(custoItem.valor.toString().replace(',', '.'));
        estatistica.valor += estatistica.nome === custoItem.tipo.toLocaleUpperCase() ? valorItem : 0;
      });
    });

    this.estatistica.map((estatistica) => {
      estatistica.porcetagem = Math.round((estatistica.valor * 100) / custoTotal)
    });
    this.estatistica.forEach((estatistica => estatistica.icone = FormatadorUtils.icones[estatistica.nome]));
  }
}
