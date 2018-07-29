import {Component, OnInit} from '@angular/core';
@Component({
   templateUrl: `app/app.component.html`,
    selector: 'my-app'
})


export class AppComponent {

    public title : string = 'This is Example Of Interpolation';

    public color : string = "orange";

    public showMe : boolean =true;

    public colors : string [] =["Red","Blue","Green"];

    public count: number=0;

    public name : string = '';

    public num: number= 0;

    constructor() {
        }   

    getTitle(): string {
            return this.title;
        }
       
        buttonClicked() : void {
            this.count = this.count + 1;
            console.log("Button Clicked"+this.count);
        }    
        
}
