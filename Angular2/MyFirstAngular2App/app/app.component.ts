import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {TemplatesComponent} from './templatecomp.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 Application</h1>
    <courses></courses>
    <authors></authors>
    <templatecomp></templatecomp>
    `,
    directives : [CoursesComponent,AuthorsComponent,TemplatesComponent] 
})
export class AppComponent { }