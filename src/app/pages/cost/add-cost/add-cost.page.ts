import { Component, OnInit } from '@angular/core';
import { Custo } from 'src/app/model/Custo';
import { SessionStorageService } from 'src/app/service/sessionStorage/session-storage.service';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.page.html',
  styleUrls: ['./add-cost.page.scss'],
})
export class AddCostPage implements OnInit {

  custo = new Custo();
  possuiParcela = false;

  constructor(
    private _sessionStorage: SessionStorageService
  ) { }

  ngOnInit() { }

  exibirParcela() {
    this.possuiParcela = !this.possuiParcela;
  }

  adicionarCusto(custoForm: any) {
    console.log('valorFormulário', custoForm.value);
  }

}
