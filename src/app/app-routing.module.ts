import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodiesListModule } from './bodieslist.module';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Theme1Component } from './Themes/theme1/theme1.component';
import { Theme2Component } from './Themes/theme2/theme2.component';
import { Theme3Component } from './Themes/theme3/theme3.component';
import { Theme4Component } from './Themes/theme4/theme4.component';
import { Theme5Component } from './Themes/theme5/theme5.component';

const routes: Routes = [
  {
    path: 'theme1',
    children: [
    
      {
        path: 'about/:id',
        component: AboutComponent,
      }
    
    ],
    component: Theme1Component,
  },
  {
    path: 'theme2',
    children: [
     
      {
        path: 'about/:id',
        component: AboutComponent,
      }
    ],
    component: Theme2Component,
  },
  {
    path: 'theme3',
    children: [

      {
        path: 'about/:id',
        component: AboutComponent,
      }
    ],
    component: Theme3Component,
  },
  {
  path: 'theme4',
  children: [

    {
      path: 'about/:id',
      component: AboutComponent,
    }
  ],
  component: Theme4Component,
  },
  {
  path: 'theme5',
  children: [

    {
      path: 'about/:id',
      component: AboutComponent,
    }
  ],
  component: Theme5Component,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes), BodiesListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
