import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <h2>TEst</h2>
        <ul>
            <li *ngFor="let test of testArray">
                {{test}}
            </li>
        </ul>
    `
})
export class AppComponent { 
    public testArray = ["TEst1", "TEst2"];
}
