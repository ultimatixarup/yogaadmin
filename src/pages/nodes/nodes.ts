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
items:any;

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
   this.items = [];

  
  
  
      this.http.get(nodeListUrl).subscribe(resp => {
                                         // alert(resp['_body']);  
                                         console.log(resp); 
                                         
                                         for(var i = 0; i < resp.length; i++) {
            
             let element= { label: resp[i][0],name: resp[i][5],description: resp[i][1], data: resp[i][2], image: resp[i][3], type: resp[i][4]};
                    this.items.push(element);
                    }
            
           
            loader.dismiss();
        },
err=>{
    console.log(err);
    loader.dismiss();
});
  }

}
