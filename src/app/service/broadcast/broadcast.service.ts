import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public detailSubjetct = new Subject<number>();

  constructor() { }

  setDetailSubject(idCusto: number) {
    this.detailSubjetct.next(idCusto);
  }

}
