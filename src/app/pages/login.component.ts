import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { moveIn } from '../router.animations';

@Component({
  templateUrl: 'login.component.html',
  animations: [moveIn()],
  host: {'[@moveIn]': ''}  // annimation de début
})
export class LoginComponent {
emailError: boolean = false;
state: string = '';
constructor(public authService: AuthService, private router: Router) {  }

  login() {
    // Si on authentification alors
    this.authService.loginWithGoogle().then((data) => {
        // Filtrage des domaines sauf @esi.dz
        var domainEsi: string = '@esi.dz';
        if(! data.auth.email.includes(domainEsi, data.auth.email.length-domainEsi.length)){
            // On déconnecte
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
