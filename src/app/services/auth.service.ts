import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire, AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from "rxjs/Rx";
//import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
/*import { Http } from '@angular/http';
import FirebaseTokenGenerator from 'firebase-token-generator';*/

@Injectable()
export class AuthService implements CanActivate {
  // Utilisation des services : 
      // AngularFire pour la base de données
      // AngularFireAuth pour l'authentification
      // Router pour le retage  
  constructor(public af: AngularFire, private auth: AngularFireAuth, private router: Router/*, private http: Http*/) { }

  canActivate(): Observable<boolean> {

      return Observable.from(this.auth)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if // rediriction à la page d'accueil
        (!authenticated) this.router.navigate([ '/pages/login' ]);
      })
    }
 

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup  // Sous format Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }

  /*login(credentials) {
    this.http.post('https://localhost:3000/api/authenticate', credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
      var id_token = new FirebaseTokenGenerator('id_token');
      localStorage.setItem('id_token', id_token);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    localStorage.removeItem('id_token'); 
  }*/

}
