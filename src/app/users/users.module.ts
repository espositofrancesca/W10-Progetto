import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users/users.page';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';




const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  }
];

@NgModule({
  declarations: [
    UsersPage,

  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
