import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { SessionStorageService } from './service/session-storage/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  exibirLoading = false;

  constructor(
    private router: Router,
    private _sessionStorage: SessionStorageService
  ) { }

  ngOnInit() {
  }
}
