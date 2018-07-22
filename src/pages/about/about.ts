import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CompleteTestService } from '../../services/autocompleteservice';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 data:any;
  constructor(public navCtrl: NavController,public completeTestService: CompleteTestService) {

  }
  
  show(){
     alert(this.data);
  }

}
