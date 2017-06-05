import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
  }

  submit(form: NgForm) {
    console.log(form.valid);
  }

  ionViewCanLeave() {
    return this.frm.valid;
  }

}
