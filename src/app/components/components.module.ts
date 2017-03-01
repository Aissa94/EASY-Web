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
    apiKey: "AIzaSyDyBR9jBfFUwFEonlvnriNCJfm1VzZoR8M",
    authDomain: "test-c3928.firebaseapp.com",
    databaseURL: "https://test-c3928.firebaseio.com",
    storageBucket: "test-c3928.appspot.com",
    messagingSenderId: "709967017535"
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
