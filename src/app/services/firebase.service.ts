import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

// On injecte comme étant un service 
@Injectable()
export class FirebaseService  {
    // l'url à l'api du serveur
    private _url : string = "http://localhost:3000/api/users";

    // utilisation de Http et AngularFire
    constructor(private _http:Http, private af:AngularFire){}

    getUsers(){  // requette get
        return this._http.get(this._url+'/members')
            .map((response:Response) => response.json()); // réponse sous format json
    }

}