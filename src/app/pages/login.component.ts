import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user = {};
  members: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      console.log('---->', user)
      if (user) {
        this.user = user.auth.providerData[0];
        this.members = af.database.list('/members');
        console.log('---->', this.members);
      }
      else {
        this.user = {};
        this.members = null;
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    this.af.auth.logout();
  }

  isUserLoggedIn() {
    return (Object.keys(this.user).length === 0);
  }  


}
