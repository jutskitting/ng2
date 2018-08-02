import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Body1Component } from './Components/Bodies/body1/body1.component';
import { Body2Component } from './Components/Bodies/body2/body2.component';
import { Body3Component } from './Components/Bodies/body3/body3.component';
import { Body4Component } from './Components/Bodies/body4/body4.component';
import { Body5Component } from './Components/Bodies/body5/body5.component';


@NgModule({

  imports: [FormsModule, BrowserModule
  ],
  declarations: [
    Body1Component,
    Body2Component,
    Body3Component,
    Body4Component,
    Body5Component
  ],
  providers: [],
  entryComponents: [
   
  ],
  exports: [
    Body1Component,
    Body2Component,
    Body3Component,
    Body4Component,
    Body5Component
  ]
})
export class BodiesListModule { }

