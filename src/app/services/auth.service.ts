import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire, AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService implements CanActivate {

  constructor(public af: AngularFire, private auth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {

      return Observable.from(this.auth)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/login' ]);
      })
    }
 

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }

}
