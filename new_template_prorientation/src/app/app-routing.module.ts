import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'Trail',
    loadChildren: () => import('./pages/trail/trail.module').then( m => m.TrailPageModule)
  },
  {
    path: 'orientation',
    loadChildren: () => import('./pages/orientation/orientation.module').then( m => m.OrientationPageModule)
  },
  {
    path: 'user-space',
    loadChildren: () => import('./pages/user-space/user-space.module').then( m => m.UserSpacePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
 { path: 'login', loadChildren: ()=> import('./pages/login/login.module').then(m=>m.LoginPageModule) },
 { path: 'register', loadChildren: ()=> import ('./pages/register/register.module').then(m=>m.RegisterPageModule) }
 //{ path: 'dashboard', loadChildren:()=> import('./pages/dashboard/dashboard.module').then(m=>m.DashboardPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
