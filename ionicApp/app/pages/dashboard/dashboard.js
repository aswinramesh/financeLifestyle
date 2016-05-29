import {Page, NavController, NavParams} from 'ionic-angular';
import {AddEditTransaction} from '../transactions/addEditTransaction';

@Page({
  templateUrl: 'build/pages/dashboard/dasboard.html'
})
export class Dashboard {

  static get parameters() {
    return [[NavController], [NavParams]];
  }


  constructor(nav, navParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  addTransaction(event, item){
  	     this.nav.push(AddEditTransaction, {
       item: item
     });

  }
}
