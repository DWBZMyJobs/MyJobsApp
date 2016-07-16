import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>Id: </label>{{hero.id}}</div>
        <div><label>Name: </label>{{hero.name}}</div>
    `,
})
export class AppComponent { 
    title = 'Tour of Heroes!';
    hero: Hero = {
        id:1,
        name:'Windostorm'
    };
}

export class Hero{
    id: number;
    name: string;
}