import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FireService } from '../services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  nom : string;
  photoURL: string = '';
  user = {};
  compte = {};

constructor(public af: AngularFire, private _router: Router, private _route: ActivatedRoute) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user.auth.providerData[0];
        this.nom = user.auth.displayName;
        this.photoURL = user.auth.photoURL;
      }
      else {
        this.user = {};
        this.nom = '';
        this.photoURL = '';
      }
    });
  }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  
  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
    this.af.auth.subscribe(user => {
      if (user) {
          this.user = user.auth.providerData[0];
          this.nom = user.auth.displayName;
          this.photoURL = user.auth.photoURL;
          var email: String = user.auth.email;
          // Vérification du domaine
          var domainEsi: string = '@esi.dz';
          if(! email.includes(domainEsi, email.length-domainEsi.length) && (false)){
            this.logout();
          }
          else{
            //acces à la base de données
            /*this._fireService.getComptes(email)
                  .subscribe(
                      data => {
                        this.compte = data;
                        this._router.navigate(['/home/', this.compte[1].$value]);  },
                      error => alert(error)
                  );*/
            this._router.navigate(['/home']);
          }
      }
      else {
        this.user = {};
        this.nom = '';
        this.photoURL = '';
      }
    });
    
    return this.user;
  }

  logout() {
    this.af.auth.logout();
    this._router.navigate(['']); 
  }

  ngOnInit(): void {}
}
