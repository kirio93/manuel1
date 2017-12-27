import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {RandomPage} from "../random/random";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RandomPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
