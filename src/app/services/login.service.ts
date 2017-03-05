import { Injectable, NgModule } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { FireService } from './firebase.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.classe';
import { Observable } from "rxjs/Observable";


@Injectable()
export class LoginService{
  user: Observable<{}>;
  compte = {};

  constructor(public af: AngularFire, private _fireService: FireService, private _router: Router) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = new Observable<User>();
        /*this.user[0] = new User();  
        this.user[0].nom = user.auth.displayName;
        this.user[0].photoURL = user.auth.photoURL;
        this.user[0].email = user.auth.email;
        alert('user : '+this.user[0].nom);*/
        this.user[0] = user.auth.providerData[0];
      }
      else {
        
        this.user = new Observable<User>();
        this.user[0]  = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
    alert('OK :'+this.af.auth.getAuth().google.email);
    var email: String = this.af.auth.getAuth().google.email;
          // Vérification du domaine
          var domainEsi: string = '@esi.dz';
          if(! email.includes(domainEsi, email.length-domainEsi.length)){
            this.logout();
            console.log("Login seulement avec @esi.dz");
          }
          else {
            //acces à la base de données
            this._fireService.getComptes(email)
                .subscribe(
                  data => this.compte = data,
                  error => alert(error),
                );
                
            console.log("Login ...");
            this._router.navigate(['/home/'+this.user[0].nom]);
          }

          return this.user;
    }
    

  logout() {
    this.af.auth.logout();
  }

  isUserLoggedIn() {
    return (Object.keys(this.af.auth).length === 0);
  } 
}