import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hellocomponent';
import { WelcomeComponent } from './welcomecomponent';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
