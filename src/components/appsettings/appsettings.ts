import { Component } from '@angular/core';

/**
 * Generated class for the AppsettingsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'appsettings',
  templateUrl: 'appsettings.html'
})
export class AppsettingsComponent {

  text: string;

 public static API_ENDPOINT='https://getwellbyoga.org/yoga';
 public static LIST_NODE= AppsettingsComponent.API_ENDPOINT + '/deplist.php';
 public static GET_TYPES= AppsettingsComponent.API_ENDPOINT + '/gettypes.php';
 
 
  constructor() {
    console.log('Hello AppsettingsComponent Component');
    this.text = 'Hello World';
  }

}
