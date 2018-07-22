import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { AppsettingsComponent } from '../../components/appsettings/appsettings'

/**
 * Generated class for the NodesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nodes',
  templateUrl: 'nodes.html',
})
export class NodesPage {

nodeList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public loadingCtrl:LoadingController) {
  
 this.initializeItems();
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NodesPage');
  }
  
  
  
  
  initializeItems(){
    let loader = this.loadingCtrl.create({
        content: "Loading..."
    });
  loader.present();
  
  var nodeListUrl = AppsettingsComponent.LIST_NODE;
  

  alert(nodeListUrl);
  
  
      this.http.get(nodeListUrl).subscribe(resp => {
                                         // alert(resp['_body']);  
                                         console.log(resp);                                                                          
            this.nodeList = resp;
            console.log(this.nodeList);
            
            
           
            loader.dismiss();
        },
err=>{
    console.log(err);
    loader.dismiss();
});
  }

}
