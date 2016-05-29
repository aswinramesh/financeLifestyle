import {Page} from 'ionic-angular';
import {Dashboard} from '../dashboard/dashboard';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Dashboard;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
  }
}
