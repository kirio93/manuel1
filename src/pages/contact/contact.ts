import {Component, } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ProvaProvider} from "../../providers/prova/prova";
import {Oggetti} from "../../app/oggetti";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  storico=new Array<Oggetti>();

  constructor(public navCtrl: NavController, private prova:ProvaProvider, public navParams: NavParams,  public viewCtrl: ViewController){
    // Receiving data via navController
  this.storico=<Array<Oggetti>>JSON.parse(localStorage.getItem("storico"));
    console.log(this.storico)

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



}
