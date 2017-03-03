import { NgModule }                 from '@angular/core';

import { ButtonsComponent }         from './buttons.component';
import { CardsComponent }           from './cards.component';
import { FormsComponent }           from './forms.component';
import { SocialButtonsComponent }   from './social-buttons.component';
import { SwitchesComponent }        from './switches.component';
import { TablesComponent }          from './tables.component';

// Modal Component
import { ModalModule }              from 'ng2-bootstrap/modal';
import { ModalsComponent }          from './modals.component';

// Tabs Component
import { TabsModule }               from 'ng2-bootstrap/tabs';
import { TabsComponent }            from './tabs.component';

// Components Routing
import { ComponentsRoutingModule }  from './components-routing.module';

// Our Components
import { TestComponent }            from './test.component';

// Firebase
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyA_ci6KLWvGyWTzeeBg2ou1AmmF7pHb5WQ",
    authDomain: "easy-cd94c.firebaseapp.com",
    databaseURL: "https://easy-cd94c.firebaseio.com",
    storageBucket: "easy-cd94c.appspot.com",
    messagingSenderId: "836617829583"
};

@NgModule({
    imports: [
        ComponentsRoutingModule,
        ModalModule.forRoot(),
        TabsModule,
        AngularFireModule.initializeApp(firebaseConfig) 
    ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        ModalsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
        TabsComponent,
        TestComponent
    ]
})
export class ComponentsModule { }
