import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button> `
})
export class ChildComponent {
    @Output() valueChange = new EventEmitter();

    message = 'Hello Pillu I Love You !';

    counter = 0;
    valueChanged() { // You can give any function name
        this.counter = this.counter + 1;
        this.valueChange.emit(this.counter);
    }
}