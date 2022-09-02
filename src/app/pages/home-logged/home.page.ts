import { Component, OnInit } from '@angular/core';
import { Estatistica } from 'src/app/model/Estatistica';
import { ItensHome } from 'src/app/model/ItensHome';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  idUsuario: any;
  itensHome = new ItensHome();
  estatitisca: Estatistica[] = [];

  constructor(
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService
  ) { }

  ngOnInit() {
    this.carregarIdUsuario();
    setTimeout(() => this.carregarCustos(this.idUsuario), 500);
  }

  async carregarIdUsuario() {
    this.idUsuario = await this._sessionStorageService.getSession();
  }

  carregarCustos(idUsuario: any) {
    this._custoService.buscarCustos(idUsuario).subscribe((result) => {
      this.itensHome = result;
      this.calcularEstatistica();
    });
  }

  calcularEstatistica() {
    const custos = this.itensHome.custos;
    const custoTotal = this.itensHome.totalGasto;
    custos.forEach(custoItem => this.estatitisca.push(new Estatistica(custoItem.tipo)));
    this.estatitisca = this.estatitisca.filter(function (a) {
      return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null));

    custos.forEach((custoItem) => {
      this.estatitisca.map((estatistca) => estatistca.valor += estatistca.nome === custoItem.tipo.toLocaleUpperCase() ? custoItem.valor : 0)
      this.estatitisca.map((estatitisca) => estatitisca.porcetagem = Math.round((estatitisca.valor * 100) / custoTotal));
    });
  }
}
