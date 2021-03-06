import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent }  from './layouts/simple-layout.component';
import { AuthService } from './services/auth.service';
//import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: 'home',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthService]//[AuthGuard]
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      },
    ]
  },
  /*{ 
    path: 'pages/login', 
    redirectTo: 'pages/404', 
    pathMatch: 'full' 
  },*/
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'pages/404', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
