import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { FireService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  providers: [FireService]
})
export class LoginComponent {
  photoURL : string = '';
  user = {};
  compte = {};

constructor(public af: AngularFire, private _fireService: FireService, private _router: Router) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user.auth.providerData[0];
        this.photoURL = user.auth.photoURL;
      }
      else {
        this.user = {};
        this.photoURL = '';
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
    this.af.auth.subscribe(user => {
      if (user) {
          this.user = user.auth.providerData[0];
          this.photoURL = user.auth.photoURL;
          var email: String = user.auth.email;
          // Vérification du domaine
          var domainEsi: string = '@esi.dz';
          if(! email.includes(domainEsi, email.length-domainEsi.length)){
            this.logout();
            this._router.navigate(['']);
            alert('Login 1-Seul le domaine @esi.dz est accepté !'); 
          }
          else{
            //acces à la base de données
            /*this._fireService.getComptes(email)
                  .subscribe(
                      data => {
                        this.compte = data;
                        this._router.navigate(['/home']); },
                  );*/
              this._router.navigate(['/home']); 
          }
      }
      else {
        this.user = {};
        this.photoURL = '';
      }
    });
    return this.user;
  }

  logout() {
    this.af.auth.logout();
  }
  
  seConnecterAutre() {
    this.logout();
    //Wait 1 seconds, and login :
    setTimeout(() => this.login(), 1000);
  }

  isUserLoggedIn() {
    return (Object.keys(this.user).length === 0);
  }  
  

}
