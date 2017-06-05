import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

/**
 * Generated class for the BarcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  text: string;
  format: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcode: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  scan() {
    this.barcode.scan().then((data) => {
      if (!data.cancelled) {
        this.text = data.text;
        this.format = data.format;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

}
