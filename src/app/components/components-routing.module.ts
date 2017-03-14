import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { TestComponent } from './test.component';
<<<<<<< HEAD
import { SchedulerComponent } from './scheduler.component';
=======
import { SemestreComponent } from './semestre.component';
import { LevelComponent } from './level.component';
import { GroupsComponent } from './group.component';
>>>>>>> 0a8c55088935dfc5295e60f03fc5669898a90d34

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'social-buttons',
        component: SocialButtonsComponent,
        data: {
          title: 'Social buttons'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'semestre',
        component: SemestreComponent,
        data: {
          title: 'Semestre'
        }
      },
      {
        path: 'group',
        component: GroupsComponent,
        data: {
          title: 'Groupe'
        }
      },
      {
        path: 'level',
        component: LevelComponent,
        data: {
          title: 'Niveau'
        }
      },
      {
        path: 'test',
        component: TestComponent,
        data: {
          title: 'Test'
        }
      },
      {
        path: 'scheduler',
        component: SchedulerComponent,
        data: {
          title: 'Scheduler'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
