import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 title : string = 'Angular Spring Boot REST Application';
 count: number = 0;

  clickEvent() {
        this.count++;
    }
}

