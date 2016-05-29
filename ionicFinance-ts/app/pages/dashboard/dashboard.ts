import {Page, NavController, NavParams} from 'ionic-angular';
import {AddEditTransactionsPage} from '../add-edit-transactions/add-edit-transactions';

@Page({
  templateUrl: 'build/pages/dashboard/dasboard.html'
})
export class Dashboard {


  constructor(public nav: NavController) {

  }

  addTransaction(event, item){
  	    this.nav.push(AddEditTransactionsPage,{},{});

  }
}
