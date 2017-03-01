import { NgModule } from '@angular/core';

import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';

// Firebase
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDyBR9jBfFUwFEonlvnriNCJfm1VzZoR8M",
    authDomain: "test-c3928.firebaseapp.com",
    databaseURL: "https://test-c3928.firebaseio.com",
    storageBucket: "test-c3928.appspot.com",
    messagingSenderId: "709967017535"
};

@NgModule({
  imports: [ PagesRoutingModule, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
