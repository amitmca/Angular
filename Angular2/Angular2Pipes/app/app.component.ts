import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<p>Unformatted :{{cur}} </p>
        <p>Example 1 :{{cur | currency }} </p>
        <p>Example 2 :{{cur | currency:'INR':true:'4.2-2'}} </p>`
    })
export class AppComponent { 

    title: string = 'Angular 2 pipes Example' ;
    cur: number= 175;
}