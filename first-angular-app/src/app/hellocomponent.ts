import { Component } from '@angular/core';

@Component({
    selector: 'hello-component',
    template: `<div>
                <h1>My Name is {{name}} </h1>
                </div>`
})

export class HelloComponent{
    name = 'Anuja Pandit'
}