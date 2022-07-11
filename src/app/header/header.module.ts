import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'

@NgModule({
  declarations: [
    NavbarComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HeaderModule { }
