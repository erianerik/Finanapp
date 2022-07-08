import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.page.html',
  styleUrls: ['./add-cost.page.scss'],
})
export class AddCostPage implements OnInit {

  possuiParcela = false;

  constructor() { }

  ngOnInit() {
  }

  exibirParcela() {
    console.log('oi');
    this.possuiParcela = !this.possuiParcela;
    console.log(this.possuiParcela);

  }

}
