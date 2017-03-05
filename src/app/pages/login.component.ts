import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
emailError: boolean = false;

constructor(public authService: AuthService, private router: Router) {  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
        var domainEsi: string = '@esi.dz';
        if(! data.auth.email.includes(domainEsi, data.auth.email.length-domainEsi.length)){
            this.authService.logout();
            setTimeout((e)=> e.emailError = false, 4000, this);
            this.emailError = true;
        }
        else{
            //acces à la base de données pour recupérer les données ...
            /*this._fireService.getComptes(data.auth.email)
                  .subscribe(
                      donnees => {
                        this.compte = donnees;},
                  );*/
            this.emailError = false;
            this.router.navigate(['']); 
        }
    })
  }

}
