import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {ProvaProvider} from "../../providers/prova/prova";
import {ContactPage} from "../contact/contact";
import {TIPI} from "../../app/tipi";
import {Oggetti} from "../../app/oggetti";

/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {


  risultato = new Oggetti()
  storico = new Array<Oggetti>()
  lista=new Array()


  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public provaProvider: ProvaProvider) {
    this.createStorico();
    //setInterval(function(){ this.selezionaParola();}.bind(this), 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
  }

  createStorico() {

    if (localStorage.getItem("storico") == null) {
      let storico = new Array<Oggetti>()
      localStorage.setItem("storico", JSON.stringify(storico))
    }

    if (localStorage.getItem("lista") == null) {
      let storico = TIPI;
      localStorage.setItem("lista", JSON.stringify(storico))
    }

  }

  selezionaParola() {
    this.lista=JSON.parse(localStorage.getItem("lista"))
    console.log(this.lista)
    this.risultato=<Oggetti>this.lista[Math.floor(Math.random()*this.lista.length)]
    this.lista.splice(this.lista.indexOf(this.risultato),1)
    localStorage.setItem("lista", JSON.stringify(this.lista))
    let storic = JSON.parse(localStorage.getItem("storico"))
    storic.push(this.risultato)
        localStorage.setItem("storico", JSON.stringify(storic))
  }

}
