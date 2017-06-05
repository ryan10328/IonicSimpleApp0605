import { ListPage } from './../list/list';
import { MasterPage } from './../master/master';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hello Ionic Alert',
      message: 'This is a simple alert'
    });
    alert.present();
  }

  goMaster() {
    this.navCtrl.push(MasterPage, { name: 'Ryan', age: 28 });
  }

  setRootPage() {
    this.navCtrl.setRoot(ListPage);
  }
}
