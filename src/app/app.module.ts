import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BodiesListRouterModule } from './bodies-list-router.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './app.component-bootstrap.module';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { Theme6Component } from './Themes/theme6/theme6.component';

import { FooterMainComponent } from './Themes/Footers/footer-main/footer-main.component';
import { HeaderMainComponent } from './Themes/Headers/header-main/header-main.component';

import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PageSectionsModule } from './page-sections.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Make a headers / footers / theme module so this page isnt as cluttered and import

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Theme6Component,
    PageNotFoundComponent,
    FooterMainComponent,
    HeaderMainComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    PageSectionsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppBootstrapModule,
    RouterModule,
    BodiesListRouterModule,
    AppRoutingModule
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
 
})
export class AppModule { }
