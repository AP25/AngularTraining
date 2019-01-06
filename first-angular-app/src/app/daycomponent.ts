import { Component } from '@angular/core';
import * as Moment from 'moment';

@Component({
    selector: 'day-component',
    template: `<div>
                <h1>Today is {{day}}</h1>
               </div>`
})

export class DayComponent{
    day = Moment().format('dddd');
}