import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { ItensHome } from 'src/app/model/ItensHome';

@Component({
  selector: 'app-my-cost',
  templateUrl: './my-cost.page.html',
  styleUrls: ['./my-cost.page.scss'],
})
export class MyCostPage implements OnInit {

  idUsuario: any;
  itensHome = new ItensHome();

  constructor(
    private _broadcast: BroadcastService,
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService
  ) { }

  ngOnInit() {
    this.carregarIdUsuario();
    setTimeout(() => this.carregarCustos(this.idUsuario), 500);
  }

  goToDetail() {
    this._broadcast.setDetailSubject("Hellow");
  }

  async carregarIdUsuario() {
    this.idUsuario = await this._sessionStorageService.getSession();
  }

  carregarCustos(idUsuario: any) {
    this._custoService.buscarCustos(idUsuario).subscribe((result) => this.itensHome = result);
  }
}
