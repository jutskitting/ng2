import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodiesListRouterModule } from './bodies-list-router.module';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


// try to find way to cleanup routes with more routing modules https://malcoded.com/posts/angular-fundamentals-routing
// possible routing solution https://stackoverflow.com/questions/40380269/how-to-access-a-component-from-different-module-in-angular-2
// route help https://itnext.io/child-routes-with-respective-components-in-angular-4-36f1be42278e

const routes: Routes = [
 

  {
    path: '**',
    component: PageNotFoundComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BodiesListRouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
