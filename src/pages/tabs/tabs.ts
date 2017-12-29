import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import {RandomPage} from "../random/random";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RandomPage;
  tab3Root = ContactPage;

  constructor() {

  }

}
