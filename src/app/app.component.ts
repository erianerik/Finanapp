import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { SessionStorageService } from './service/sessionStorage/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private _sessionStorage: SessionStorageService
  ) { }

  ngOnInit() {
    
  }
}
