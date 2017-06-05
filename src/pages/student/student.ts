import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/rx';
import { Observable } from "rxjs/Observable";
/**
 * Generated class for the StudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  students: any[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private alertCtrl: AlertController) {
    this.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  getStudents(): Observable<any> {
    return this.http.get('http://localhost:3000/students')
      .map((response) => { return response.json() });
  }

  addStudent() {
    let alert = this.alertCtrl.create({
      title: 'Add Student',
      message: 'Please add a student',
      inputs: [
        {
          name: 'name',
          placeholder: 'Student Name'
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            this.http.post('http://localhost:3000/students',
              { name: data.name })
              .concatMap(() => this.getStudents())
              .subscribe((data) => {
                this.students = data;
              });
          }
        }
      ]

    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}
