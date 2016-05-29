import {Page, Platform} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
	
	//pet: string = "puppies";
  	//isAndroid: boolean = false;


  	constructor(platform= Platform) {

  		this.pet="puppies";
    	this.isAndroid = true;//platform.is('android');

  	}
}
