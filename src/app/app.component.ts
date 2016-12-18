import { Component } from '@angular/core';


@Component({
    selector: 'app',
    template: `<div>
        <meals></meals>
    </div>`
})
export class AppComponent {
    ngOnInit() {
        console.log('Initial App');
    }
}