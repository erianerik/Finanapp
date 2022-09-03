import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage.service';
import { CustoService } from 'src/app/service/custo/custo-service.service';
import { ItensHome } from 'src/app/model/ItensHome';
import { FormatadorUtils } from 'src/app/util/formatador-utils';
import Swiper, { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-my-cost',
  templateUrl: './my-cost.page.html',
  styleUrls: ['./my-cost.page.scss'],
})
export class MyCostPage implements OnInit {

  exibirSlide: boolean = true;
  naoPossuiCusto;
  idUsuario: any;
  itensHome = new ItensHome();
  icone = {
    'COMIDA': 'pizza-outline',
    'RESTAURANTE': 'restaurant-outline',
    'ROUPA': 'shirt-outline',
    'MERCADO': 'storefront-outline',
    'LAZER': 'home-outline',
    'PETS': 'paw-outline',
    'GASOLINA': 'car-outline',
    'SERVICOS': 'construct-outline',
    'TELEFONE': 'phone-portrait-outline',
    'VIAGEM': 'airplane-outline',
    'INTERNET': 'wifi-outline',
    'PRESENTE': 'gift-outline',
    'OUTROS': 'sync-outline',
    'COMPRAS': 'bag-handle-outline'
  }

  public configuracaoSlide: SwiperOptions = {
    pagination: true
  }

  constructor(
    private _broadcast: BroadcastService,
    private _sessionStorageService: SessionStorageService,
    private _custoService: CustoService
  ) { }

  ngOnInit() {
    BroadcastService.toggleLoading();
    Swiper.use([Pagination]);
    this.carregarIdUsuario();
    setTimeout(() => this.carregarCustos(this.idUsuario), 500);
  }

  irDetalheCusto(idCusto: number) {
    this.exibirSlide = false;
    this._broadcast.setDetailSubject(idCusto);
  }

  async carregarIdUsuario() {
    this.idUsuario = await this._sessionStorageService.getSession();
  }

  closeDetail(event: boolean) {
    this.exibirSlide = event;
  }

  carregarCustos(idUsuario: any) {
    this._custoService.buscarCustos(idUsuario).subscribe((result) => {
      this.itensHome = result as ItensHome;
      this.itensHome.custos.forEach((custo => custo.icone = FormatadorUtils.icones[custo.tipo.toLocaleUpperCase()]));
      this.naoPossuiCusto = this.itensHome.custos.length === 0;
    });
    BroadcastService.toggleLoading();
  }
}
