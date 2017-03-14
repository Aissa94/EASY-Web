import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {FormsModule, FormControl, FormGroup, ReactiveFormsModule, FormControlDirective, FormGroupDirective} from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Services
import { AuthService } from './services/auth.service';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
//import { AuthGuard } from './services/auth-guard.service';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCso0WqlHADHKR8ZW8AYvP9RW-3NMWmOG0",
    authDomain: "test-easi.firebaseapp.com",
    databaseURL: "https://test-easi.firebaseio.com",
    storageBucket: "test-easi.appspot.com",
    messagingSenderId: "425426765546"
};



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [{
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService,
    FirebaseService,
    FormControlDirective,
    FormGroupDirective,
    //AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
