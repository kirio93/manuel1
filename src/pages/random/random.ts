import {Component} from '@angular/core';
import {TIPI} from "../../app/tipi";
import {Oggetti} from "../../app/oggetti";
import {LocalNotifications} from "@ionic-native/local-notifications";

/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let cordova: any;

@Component({
selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {


  risultato = new Oggetti()
  storico = new Array<Oggetti>()
  lista=new Array()


  constructor() {
    this.createStorico();
    if(JSON.parse(localStorage.getItem("last"))!=new Date().getUTCDay())
      this.selezionaParola()
    else{
      this.risultato=JSON.parse(localStorage.getItem("risultato"))
    }
    cordova.plugins.notification.local.schedule({
      title: 'Pure le notifiche',
      text: 'Christian è troppo figo',
      trigger: { every: 'day', count: 1 },
      led: { color: '#8fff55', on: 100, off: 100 },
      foreground: true
    });

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
  }

  createStorico() {

    if (localStorage.getItem("storico") == null) {
      let storico = new Array<Oggetti>()
      localStorage.setItem("storico", JSON.stringify(storico))
    }
    if (localStorage.getItem("last") == null) {
      localStorage.setItem("last", JSON.stringify(32))
    }
    if (localStorage.getItem("risultato") == null) {
      localStorage.setItem("risultato", JSON.stringify(new Oggetti()))
    }

    if (localStorage.getItem("lista") == null) {
      let storico = TIPI;
      localStorage.setItem("lista", JSON.stringify(storico))
    }

  }

  clear() {

      let storico = TIPI;
      localStorage.setItem("lista", JSON.stringify(storico))


  }

  selezionaParola() {
    this.lista = JSON.parse(localStorage.getItem("lista"))
    if (this.lista.length == 0) {
      this.risultato = new Oggetti();
    } else {
      this.risultato = <Oggetti>this.lista[Math.floor(Math.random() * this.lista.length)]
      this.risultato.data = new Date
      this.lista.splice(this.lista.indexOf(this.risultato), 1)
      localStorage.setItem("lista", JSON.stringify(this.lista))
      let storic = JSON.parse(localStorage.getItem("storico"))
      storic.push(this.risultato)
      localStorage.setItem("storico", JSON.stringify(storic))
      console.log(this.risultato)
      localStorage.setItem("risultato", JSON.stringify(this.risultato))
      localStorage.setItem("last", JSON.stringify(new Date().getUTCDay()))

    }
  }
}
