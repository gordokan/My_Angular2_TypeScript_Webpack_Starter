import { Component } from '@angular/core';


@Component({
    selector: 'app',
    template: `<div>Test</div>`
})
export class AppComponent {
    ngOnInit() {
        console.log('Initial App');
    }
}