import {AutoCompleteService} from 'ionic2-auto-complete';
import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class CompleteTestService implements AutoCompleteService {
  labelAttribute = "name";

  constructor(private http:HttpClient) {

  }
  getResults(keyword:string) {
  //alert(keyword);
    return this.http.get("http://getwellbyoga.org/yoga/gettypes.php");
  }
}