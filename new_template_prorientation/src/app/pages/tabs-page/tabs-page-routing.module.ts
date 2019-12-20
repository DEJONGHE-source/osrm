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
