import { ListPage } from './../list/list';
import { MasterPage } from './../master/master';
import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private storage: Storage) {

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

  ionViewCanEnter() { // Boolean, Promise<Boolean>
    // let account = this.navParams.get('account');
    // let password = this.navParams.get('password');
    return this.storage.get('userInfo').then((data) => {
      console.log(data);
      return data.account == '1234' && data.password == '1234';
    });
    // console.log(account);
    // console.log(password);
    // return account == '1234' && password == '1234';
  }


}
