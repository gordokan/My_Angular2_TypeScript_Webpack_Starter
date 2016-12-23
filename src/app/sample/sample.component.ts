import { Component } from '@angular/core';
import { SampleClass } from './sample';
import * as _ from 'lodash';


@Component({
    selector: 'sample-component',
    styles: ['.list {list-style-type: none;}'],
    template: `
    <ul class="list">
        <li *ngFor="let sample of sampleArry">
            {{sample.name}}
        </li>
    </ul>
    `
})
export class SampleComponent {
    sampleArry: SampleClass[];

    constructor() {}

    ngOnInit() {
        this.sampleArry = [
            new SampleClass(0, 'Sample 1'),
            new SampleClass(1, 'Sample 2')
        ];
    }
}
