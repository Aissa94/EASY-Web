import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { moveInLeft } from '../used/router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  animations: [moveInLeft()],   // annimation de materialize
  host: {'[@moveInLeft]': ''}
})
export class FullLayoutComponent implements OnInit {
  private isLoggedIn: Boolean;   // login ou pas
  private user_displayName: String;    // le nom issu de google
  private user_email: String;   // le email issu de google
  private user_photoURL: String;   // la photo issue de google
  state: string = '';

constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { 
  this.authService.af.auth.subscribe(
      (auth) => {
        // si pas de compte
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.user_photoURL = '';
          this.router.navigate(['pages/login']);
        } else {   // si compte existant
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.user_photoURL = auth.google.photoURL;
          this.router.navigate(['']);   // redirection au home
        }
      }
    );
  }

  login() {
    // connexion avec un autre compte
    this.authService.loginWithGoogle().then((data) => {
        // filtre sur le domaine google
        var domainEsi: string = '@esi.dz';
        if(! data.auth.email.includes(domainEsi, data.auth.email.length-domainEsi.length)){
            this.logout();
            // à remplacer par une notification
            alert('Seul le domaine @esi.dz est accepté !');
        }
        else{
            //acces à la base de données pour recupérer les données ...
            /*this._fireService.getComptes(data.auth.email)
                  .subscribe(
                      donnees => {
                        this.compte = donnees;},
                  );*/
        }
    })
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

  logout() {
    this.authService.logout();
    //redirection à la page de login
    this.router.navigate(['pages/login']);  
  }

  ngOnInit(): void {}
}
