import { Component, OnInit } from '@angular/core';
import { Custo } from 'src/app/model/Custo';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.page.html',
  styleUrls: ['./add-cost.page.scss'],
})
export class AddCostPage implements OnInit {

  custo = new Custo();
  idUsuario: any;
  possuiParcela = false;

  constructor(
    private _sessionStorage: SessionStorageService,
    private _custoService: CustoService
  ) { }

  ngOnInit() {
    this.carregarSessionStorage();
  }
  async carregarSessionStorage() {
    this.idUsuario = await this._sessionStorage.getSession();
  }

  exibirParcela() {
    this.possuiParcela = !this.possuiParcela;
  }

  adicionarCusto(custoForm: any) {
    this.custo.idUsuario = this.idUsuario;
    this._custoService.cadastrarCusto(this.custo).subscribe((result) => console.log(result));
  }

}
