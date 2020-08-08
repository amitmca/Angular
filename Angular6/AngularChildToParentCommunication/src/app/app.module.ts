import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChildComponent } from "./child.component";
import { StockStatusComponent } from './stockstatus.component';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // added this
import { ButtonModule } from 'primeng/components/button/button';// added this
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StockStatusComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule, // added this
  ButtonModule,// added this
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
