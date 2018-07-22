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


items: Array<{label: string,name: string,description: string, data: string, image: string, type: string}>;
cachedItems:Array<{label: string,name: string,description: string, data: string, image: string, type: string}>;

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
                                        
                                         
                                         for(var i = 0; i < resp.length; i++) {
                                         
                                        
            
             var element= { name: resp[i][1],label:resp[i][2], description: resp[i][3], data: resp[i][2], image: 'media/'+resp[i]  [1].split('.')[0]+'.jpg', type: resp[i][4],easyvid:resp[i][6],icon:resp[i][1].split('.')[0]+'.jpg'};
            
             console.log(element);
                    this.items.push(element);
                    }
            
            this.cachedItems =  this.items;
            loader.dismiss();
        },
err=>{
    console.log(err);
    loader.dismiss();
});
  }
  
  
  searchNode(searchbar) {
      // reset countries list with initial call
      this.initializeItems();
      // set q to the value of the searchbar
      var q = searchbar.target.value;
       
      // if the value is an empty string don't filter the items
    if (q && q.trim() != '') {
      this.items = this.items.filter((v) => {
         return (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1);
      })
      }
  }
  
  onCancel(event : any){
   this.items = this.cachedItems;
  }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.cachedItems;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {

        return (item.label.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        item.type.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        item.description.toLowerCase().indexOf(val.toLowerCase()) > -1
        
        );
      })
    }
  }

}
