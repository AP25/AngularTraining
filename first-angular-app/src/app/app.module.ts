import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HelloComponent } from './hellocomponent';
import { WelcomeComponent } from './welcomecomponent';
import { DayComponent } from './daycomponent';
import { AppComponent } from './app.component';
import { HelloModule } from './modules/hello.module';
window.console.log(HelloModule)

@NgModule({
  declarations: [
    AppComponent,
    /*HelloComponent*/,
    WelcomeComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
