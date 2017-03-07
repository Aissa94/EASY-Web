import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class FireService  {
    private _url : string = "http://localhost:5000/";

    constructor(private _http:Http, private af:AngularFire){}

    getEmployees(){
        return this.af.database.list('/members');
    }

    getComptes(email: String){
        return this.af.database.list('/comptes/'+email);
    }

    getUsers(){
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }

}