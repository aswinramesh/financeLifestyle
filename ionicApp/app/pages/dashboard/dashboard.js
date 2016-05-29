import {Page, NavController, NavParams} from 'ionic-angular';
import {AddEditTransactionsPage} from '../add-edit-transactions/add-edit-transactions';

@Page({
  templateUrl: 'build/pages/dashboard/dasboard.html'
})
export class Dashboard {

  static get parameters() {
    return [[NavController], [NavParams]];
  }


  constructor(nav, navParams) {
    this.nav = nav;
    this.addEditTransaction = AddEditTransactionsPage;


  }

  addTransaction(event, item){
  	    this.nav.push(this.addEditTransaction,{},{});

  }
}
