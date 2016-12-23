import { Component } from '@angular/core';


@Component({
    selector: 'app',
    template: `<div>
        <sample-component></sample-component>
    </div>`
})
export class AppComponent {
    ngOnInit() {
        console.log('Initial App');
    }
}