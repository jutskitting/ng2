import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BodiesListModule } from './bodieslist.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './app.component-bootstrap.module';
import { Footer1Component } from './Themes/Footers/footer1/footer1.component';
import { Footer3Component } from './Themes/Footers/footer3/footer3.component';
import { Footer4Component } from './Themes/Footers/footer4/footer4.component';
import { Footer5Component } from './Themes/Footers/footer5/footer5.component';
import { Header1Component } from './Themes/Headers/header1/header1.component';
import { Header2Component } from './Themes/Headers/header2/header2.component';
import { Header3Component } from './Themes/Headers/header3/header3.component';
import { Header4Component } from './Themes/Headers/header4/header4.component';
import { Header5Component } from './Themes/Headers/header5/header5.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Theme1Component } from './Themes/theme1/theme1.component';
import { Theme2Component } from './Themes/theme2/theme2.component';
import { Theme3Component } from './Themes/theme3/theme3.component';
import { Theme4Component } from './Themes/theme4/theme4.component';
import { Theme5Component } from './Themes/theme5/theme5.component';
import { HttpClientModule } from '@angular/common/http'; 

// Make a headers / footers / theme module so this page isnt as cluttered and import

@NgModule({

  declarations: [
    AppComponent,
    Footer1Component,
    Footer3Component,
    Footer4Component,
    Footer5Component,
    Header1Component,
    Header2Component,
    Header3Component,
    Header4Component,
    Header5Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    Theme1Component,
    Theme2Component,
    Theme3Component,
    Theme4Component,
    Theme5Component
  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,  
    BodiesListModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppBootstrapModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
 
})
export class AppModule { }
