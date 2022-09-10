import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'
import { Estatistica } from 'src/app/model/Estatistica';
import { ItensHome } from 'src/app/model/ItensHome';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';
import { FormatadorUtils } from 'src/app/util/formatador-utils';

@Component({
  selector: 'app-cost-chart',
  templateUrl: './cost-chart.page.html',
  styleUrls: ['./cost-chart.page.scss'],
})
export class CostChartPage implements OnInit {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  idUsuario: any;
  grafico: Chart;
  itensHome = new ItensHome();
  estatistica: Estatistica[] = [];
  dadosEstatitisca: number[] = [];
  tituloEstatitisca: string[] = [];
  corDadosEstatitisca: string[] = [];

  constructor(
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService,
  ) {
    this._custoService.custoSubject.subscribe(() => {
      this.grafico.destroy();
      this.carregarCustos(this.idUsuario);
    });
  }

  ngOnInit() {
    BroadcastService.toggleLoading();
    this.carregarIdUsuario();
    setTimeout(() => this.carregarCustos(this.idUsuario), 500);
  }

  gerarGrafico() {
    this.grafico = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.tituloEstatitisca,
        datasets: [{
          label: '# of Votes',
          data: this.dadosEstatitisca,
          backgroundColor: this.corDadosEstatitisca,
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

    this.grafico.update();
  }

  async carregarIdUsuario() {
    this.idUsuario = await this._sessionStorageService.getSession();
  }

  carregarCustos(idUsuario: any) {
    this._custoService.buscarCustos(idUsuario).subscribe((result) => {
      this.itensHome = result;
      this.gerarDadosEstatitisca();
      this.gerarGrafico();
    });
  }

  gerarDadosEstatitisca() {
    this.estatistica = [];
    this.dadosEstatitisca = [];
    this.tituloEstatitisca = [];
    this.corDadosEstatitisca = [];
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
      estatistica.cor = FormatadorUtils.tipoCorEstatitisca[estatistica.nome];
      estatistica.icone = FormatadorUtils.icones[estatistica.nome];
      estatistica.porcetagem = Math.round((estatistica.valor * 100) / custoTotal);
      this.dadosEstatitisca.push(estatistica.porcetagem);
      this.tituloEstatitisca.push(estatistica.nome);
      this.corDadosEstatitisca.push(FormatadorUtils.tipoCorEstatitisca[estatistica.nome]);
      estatistica.valorMonetario = FormatadorUtils.formatarValorMonetario(estatistica.valor);
    });

    BroadcastService.toggleLoading();
  }
}
