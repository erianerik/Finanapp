import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public static broadcastSubject = new Subject<any>();
  public detalheSubject = new Subject<number>();

  constructor() { }

  setDetailSubject(idCusto: number) {
    this.detalheSubject.next(idCusto);
  }

  static toggleLoading() {
    this.broadcastSubject.next('toggleLoading');
  }

}
