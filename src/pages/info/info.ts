import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Oggetti} from "../../app/oggetti";

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  oggetto:Oggetti;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oggetto = <Oggetti>this.navParams.get('ogg');
    console.log(this.oggetto)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
