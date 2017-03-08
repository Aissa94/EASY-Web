import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService  {
    private _url : string = "http://localhost:4300/api/users";

    constructor(private _http:Http, private af:AngularFire){}

    getUsers(){
        return this._http.get(this._url+'/members')
            .map((response:Response) => response.json());
    }

}