import { NgModule } from '@angular/core';


import { Footer1Component } from './Themes/Footers/footer1/footer1.component';
import { Footer3Component } from './Themes/Footers/footer3/footer3.component';
import { Footer4Component } from './Themes/Footers/footer4/footer4.component';
import { Footer5Component } from './Themes/Footers/footer5/footer5.component';
import { Header1Component } from './Themes/Headers/header1/header1.component';
import { Header2Component } from './Themes/Headers/header2/header2.component';
import { Header3Component } from './Themes/Headers/header3/header3.component';
import { Header4Component } from './Themes/Headers/header4/header4.component';
import { Header5Component } from './Themes/Headers/header5/header5.component';
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
import { Body6Component } from './Components/Bodies/body6/body6.component';

@NgModule({

  declarations: [
 
    Footer1Component,
    Footer3Component,
    Footer4Component,
    Footer5Component,
    Header1Component,
    Header2Component,
    Header3Component,
    Header4Component,
    Header5Component,
    Body1Component,
    Body2Component,
    Body3Component,
    Body4Component,
    Body5Component,
    Body6Component,
    Theme1Component,
    Theme2Component,
    Theme3Component,
    Theme4Component,
    Theme5Component
  ],
  exports: [
    Footer1Component,
    Footer3Component,
    Footer4Component,
    Footer5Component,
    Header1Component,
    Header2Component,
    Header3Component,
    Header4Component,
    Header5Component,
    Body1Component,
    Body2Component,
    Body3Component,
    Body4Component,
    Body5Component,
    Body6Component,
    Theme1Component,
    Theme2Component,
    Theme3Component,
    Theme4Component,
    Theme5Component
  ]

})
export class PageSectionsModule { }
