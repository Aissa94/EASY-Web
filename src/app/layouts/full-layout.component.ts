import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  private user_photoURL: String;

constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { 
  this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.user_photoURL = '';
          this.router.navigate(['pages/login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.user_photoURL = auth.google.photoURL;
          this.router.navigate(['']);
        }
      }
    );
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
        var domainEsi: string = '@esi.dz';
        if(! data.auth.email.includes(domainEsi, data.auth.email.length-domainEsi.length)){
            this.logout();
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
    this.router.navigate(['pages/login']);
  }

  ngOnInit(): void {}
}
