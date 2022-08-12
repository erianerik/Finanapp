import { BroadcastService } from './../../../service/broadcast.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'details-cost',
  templateUrl: './details-cost.component.html',
  styleUrls: ['./details-cost.component.scss'],
})
export class DetailsCostComponent implements OnInit, OnDestroy {

  showDetail = false;
  isUpdate = false;

  constructor(
    private _broadcast: BroadcastService
  ) {
    this._broadcast.detailSubjetct.subscribe((detail: string) => {
      console.log(detail);
      this.showDetail = true;
    });
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.showDetail = false;
  }

  closeDetail(): void {
    this.showDetail = false;
  }

  showUpdate(isUpdate: boolean) {
    this.isUpdate = isUpdate;
  }



}
