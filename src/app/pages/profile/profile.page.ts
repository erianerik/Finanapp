import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { SessionStorageService } from 'src/app/service/sessionStorage/session-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private idUsuario;
  isUpdate = false;

  constructor(
    private _sessionStorage: SessionStorageService,
  ) { }

  ngOnInit() {
    this.carregarStorage();
  }

  async carregarStorage() {
    this.idUsuario = await this._sessionStorage.getSession();
    console.log(this.idUsuario);

  }

  update() {
    this.isUpdate = !this.isUpdate;
  }

}
