import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public detailSubjetct = new Subject<string>();

  constructor() { }

  setDetailSubject(detailItem: string) {
    this.detailSubjetct.next(detailItem);
  }

}
