import { BroadcastService } from './../../../service/broadcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cost',
  templateUrl: './my-cost.page.html',
  styleUrls: ['./my-cost.page.scss'],
})
export class MyCostPage implements OnInit {

  constructor(
    private _broadcast: BroadcastService
  ) { }

  ngOnInit() {
  }

  goToDetail() {
    this._broadcast.setDetailSubject("Hellow");
  }

}
