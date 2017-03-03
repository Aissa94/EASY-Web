import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FireService  {
    private _url : string = "https://easy-cd94c.firebaseio.com/";

    constructor(private af:AngularFire){}

    getEmployees(){
        return this.af.database.list(this._url+'/members') as FirebaseListObservable<any[]>;
    }

    getComptes(email: String){
        return this.af.database.list(this._url+'/comptes/'+email);
    }

}