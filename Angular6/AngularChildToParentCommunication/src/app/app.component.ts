
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "./child.component";

@Component({
    selector: 'app-root',
    template: `{{ message }}<app-child (valueChange)='displayCounter($event)'></app-child>`
})
export class AppComponent implements OnInit,AfterViewInit   {

    @ViewChild(ChildComponent) child;

    ngOnInit() {
    }
    displayCounter(count) {
        console.log(count);
    }

    constructor() { }

  message:string;

    ngAfterViewInit() {
        this.message = this.child.message
    }
}