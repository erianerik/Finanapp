import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isUpdate = false;

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.isUpdate = !this.isUpdate;
  }

}
