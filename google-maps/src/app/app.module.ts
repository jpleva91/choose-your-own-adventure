import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAQIiPUlHSqhuoL_CbPf6Yq3F1R5nXBWtI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
