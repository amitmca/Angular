import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserBasicProfileService } from 'src/app/services/userBasicProfileService.service'
import { UserBasicProfileComponent } from 'src/app/view-modules/basicprofile/userBasicService.component';
import { AddUserBasicProfileComponent } from 'src/app/view-modules/basicprofile/adduserbasicprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    UserBasicProfileComponent,
    AddUserBasicProfileComponent,
    AppComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserBasicProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
