import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

/**
 * Generated class for the CheckPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {

  @ViewChild('f') frm: NgForm;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
  }

  submit(form: NgForm) {
    console.log(form.valid);
  }

  ionViewCanLeave() {
    if (!this.frm.valid) {
      let alert = this.alertCtrl.create({
        title: 'Warning',
        message: '所有欄位皆為必填'
      });
      alert.present();
      return false;
    }
    return true;
  }

}
