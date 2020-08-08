import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBasicProfileComponent } from 'src/app/view-modules/basicprofile/userBasicService.component';
import { AddUserBasicProfileComponent } from 'src/app/view-modules/basicprofile/adduserbasicprofile.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserBasicProfileComponent },
  { path: 'add-user', component: AddUserBasicProfileComponent }
];

