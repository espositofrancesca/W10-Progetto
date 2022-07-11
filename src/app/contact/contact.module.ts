import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatCardModule,
   MatIconModule
  ]
})
export class ContactModule { }
