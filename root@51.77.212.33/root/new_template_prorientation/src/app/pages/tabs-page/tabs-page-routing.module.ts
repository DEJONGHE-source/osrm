import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'Trail',
        children: [
          {
            path: '',
            loadChildren: () => import('../trail/trail.module').then(m => m.TrailPageModule)
          }
        ]

      },

      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
          }
        ]

      },

      {
        path: 'Orientation',
        children: [
          {
            path: '',
            loadChildren: () => import('../orientation/orientation.module').then(m => m.OrientationPageModule)
          }
        ]

      },

      {
        path: 'Personal',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-space/user-space.module').then(m => m.UserSpacePageModule)
          }
        ]

      },

      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
          }
        ]

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
