import { NgModule } from '@angular/core';
import { HelloComponent } from '../hellocomponent';

@NgModule({
    declarations: [
      HelloComponent
    ],
    exports: [HelloComponent]
})

export class HelloModule { }
