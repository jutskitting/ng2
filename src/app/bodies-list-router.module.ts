import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Theme1Component } from './Themes/theme1/theme1.component';
import { Theme2Component } from './Themes/theme2/theme2.component';
import { Theme3Component } from './Themes/theme3/theme3.component';
import { Theme4Component } from './Themes/theme4/theme4.component';
import { Theme5Component } from './Themes/theme5/theme5.component';
import { Body1Component } from './Components/Bodies/body1/body1.component';
import { Body2Component } from './Components/Bodies/body2/body2.component';
import { Body3Component } from './Components/Bodies/body3/body3.component';
import { Body4Component } from './Components/Bodies/body4/body4.component';
import { Body5Component } from './Components/Bodies/body5/body5.component';

const BodiesListModuleRoutes: Routes = [
  {
    path: 'theme1',
    children: [

      {
        path: '',
        component: Body1Component,
      }

    ],
    component: Theme1Component,
  },
  {
    path: 'theme2',
    children: [

      {
        path: '',
        component: Body2Component,
      }
    ],
    component: Theme2Component,
  },
  {
    path: 'theme3',
    children: [

      {
        path: '',
        component: Body3Component,
      }
    ],
    component: Theme3Component,
  },
  {
    path: 'theme4',
    children: [

      {
        path: '',
        component: Body4Component,
      }
    ],
    component: Theme4Component,
  },
  {
    path: 'theme5',
    children: [

      {
        path: '',
        component: Body5Component,
      }
    ],
    component: Theme5Component,
  },
  
];



@NgModule({

  imports: [RouterModule.forChild(BodiesListModuleRoutes)],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class BodiesListRouterModule { }

