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
import { SchedulerComponent } from './scheduler.component';
import { jqxSchedulerComponent } from "../used/angular_jqxscheduler";

//Gestion des années
import { SemestreComponent }        from './semestre.component';
import { LevelComponent }           from './level.component';
import { GroupsComponent }           from './group.component';

@NgModule({
    imports: [
        ComponentsRoutingModule,
        ModalModule.forRoot(),
        TabsModule,
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
        TestComponent,
        SchedulerComponent,
        jqxSchedulerComponent,
        SemestreComponent,
        LevelComponent,
        GroupsComponent,
    ]
})
export class ComponentsModule { }
