import {Component} from 'angular2/core'
import {CourseComponent} from './components/course/course.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><course></course>',
    directives: [CourseComponent]
})
export class AppComponent { }