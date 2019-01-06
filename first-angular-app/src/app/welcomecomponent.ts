import { Component } from '@angular/core';

@Component({
    selector: 'welcome-component',
    template: `<div>
                <h1>Welcome to {{trainingName}} </h1>
                </div>`
})

export class WelcomeComponent{
    trainingName = 'Angular Traning'
}