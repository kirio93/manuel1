import {Component, } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ProvaProvider} from "../../providers/prova/prova";
import {Oggetti} from "../../app/oggetti";
import {InfoPage} from "../info/info";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  storico=new Array<Oggetti>();

  constructor(public navCtrl: NavController){
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

  changePage(ogg:Oggetti) {
    this.navCtrl.push(InfoPage, {ogg:ogg});
  }

}
