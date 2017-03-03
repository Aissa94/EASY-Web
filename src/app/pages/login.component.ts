import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { FireService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  providers: [FireService]
})
export class LoginComponent {
  user = {};
  compte = {};

  constructor(public af: AngularFire, private _fireService: FireService, private _router: Router) {
    this.af.auth.subscribe(user => {
      console.log('User ---->', user)
      if (user) {
        this.user = user.auth.providerData[0];
      }
      else {
        this.user = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
    var email: String = this.af.auth.getAuth().google.email;
    // Vérification du domaine
    var domainEsi: string = '@esi.dz';
    if(! email.includes(domainEsi, email.length-domainEsi.length)){
      this.logout();
    }
    else{
      //acces à la base de données
      this._fireService.getComptes(email)
            .subscribe(
                data => this.compte = data,
                error => alert(error),
                () => console.log("Finished")
            );
      this._router.navigate(['/dashboard'/*, this.compte*/]);      
    }
  }

  logout() {
    this.af.auth.logout();
  }

  isUserLoggedIn() {
    return (Object.keys(this.user).length === 0);
  }  


}
