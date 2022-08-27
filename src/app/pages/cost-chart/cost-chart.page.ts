import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'
import { Estatistica } from 'src/app/model/Estatistica';
import { ItensHome } from 'src/app/model/ItensHome';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';

@Component({
  selector: 'app-cost-chart',
  templateUrl: './cost-chart.page.html',
  styleUrls: ['./cost-chart.page.scss'],
})
export class CostChartPage implements OnInit {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  idUsuario: any;
  doughnutChart: any;
  itensHome = new ItensHome();
  estatitisca: Estatistica[] = [];
  dadosEstatitisca: number[] = [];
  tituloEstatitisca: string[] = [];

  constructor(
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService,
  ) { }

  ngOnInit() {
    this.carregarIdUsuario();
    setTimeout(() => this.carregarCustos(this.idUsuario), 500);
  }

  doughnutChartMethod(dadosEstatistica: number[], tituloEstatitisca: string[]) {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: tituloEstatitisca,
        datasets: [{
          label: '# of Votes',
          data: dadosEstatistica,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgba153, 102, 255)',
            'rgb(255, 159, 64)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
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

    this.estatitisca.forEach((custo) => {
      this.dadosEstatitisca.push(custo.valor);
      this.tituloEstatitisca.push(custo.nome);
    });
    this.doughnutChartMethod(this.dadosEstatitisca, this.tituloEstatitisca);
  }

}
