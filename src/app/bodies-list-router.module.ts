import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterMainComponent } from './Themes/Footers/footer-main/footer-main.component';
import { HeaderMainComponent } from './Themes/Headers/header-main/header-main.component';
import { Theme1Component } from './Themes/theme1/theme1.component';
import { Theme2Component } from './Themes/theme2/theme2.component';
import { Theme3Component } from './Themes/theme3/theme3.component';
import { Theme4Component } from './Themes/theme4/theme4.component';
import { Theme5Component } from './Themes/theme5/theme5.component';
import { Theme6Component } from './Themes/theme6/theme6.component';
import { Body1Component } from './Components/Bodies/body1/body1.component';
import { Body2Component } from './Components/Bodies/body2/body2.component';
import { Body3Component } from './Components/Bodies/body3/body3.component';
import { Body4Component } from './Components/Bodies/body4/body4.component';
import { Body5Component } from './Components/Bodies/body5/body5.component';
import { Theme6Header1Component } from './Themes/Headers/theme-6-header-1/theme6header1.component';
import { Theme6Footer1Component } from './Themes/Footers/theme-6-footer-1/theme6footer1.component';
import { Theme6Header2Component } from './Themes/Headers/theme-6-header-2/theme6header2.component';
import { Theme6Footer2Component } from './Themes/Footers/theme-6-footer-2/theme6footer2.component';
import { Theme6Header3Component } from './Themes/Headers/theme-6-header-3/theme6header3.component';
import { Theme6Footer3Component } from './Themes/Footers/theme-6-footer-3/theme6footer3.component';
import { Theme6Header4Component } from './Themes/Headers/theme-6-header-4/theme6header4.component';
import { Theme6Footer4Component } from './Themes/Footers/theme-6-footer-4/theme6footer4.component';


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

  {
    path: 'theme6',
    component: Theme6Component,
    children: [
      {
        path: '',
        redirectTo:'/theme6/1',
        pathMatch: 'full'
      },
      {
        path: '1',
        children: [
          {
            path: '',
            component: Theme6Footer1Component,
            outlet: 'theme6footer'
     
          },
          {
            path: '',
            component: Body2Component

          },
            {
            path: '',
            component: Theme6Header1Component,
            outlet: 'theme6header'

          }  
        ]

       
      },
      {
        path: '2',
        children: [
          {
            path: '',
            component: Theme6Footer2Component,
            outlet: 'theme6footer'

          },
          {
            path: '',
            component: Body2Component

          },
          {
            path: '',
            component: Theme6Header2Component,
            outlet: 'theme6header'

          }
        ]


      },
      {
        path: '3',
        children: [
          {
            path: '',
            component: Theme6Footer3Component,
            outlet: 'theme6footer'

          },
          {
            path: '',
            component: Body2Component

          },
          {
            path: '',
            component: Theme6Header3Component,
            outlet: 'theme6header'

          }
      
        ]


      },
      {
        path: '4',
        children: [
          {
            path: '',
            component: Theme6Footer4Component,
            outlet: 'theme6footer'

          },
          {
            path: '',
            component: Body2Component

          },
          {
            path: '',
            component: Theme6Header4Component,
            outlet: 'theme6header'

          }

        ]


      },
      
    ]

  }

];



@NgModule({
  imports: [RouterModule.forChild(BodiesListModuleRoutes)],
  
  exports: [
    RouterModule
  ]
})
export class BodiesListRouterModule { }

