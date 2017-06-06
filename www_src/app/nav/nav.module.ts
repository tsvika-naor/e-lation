import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MdSidenavModule, MdAutocompleteModule, MdToolbarModule,
  MdInputModule, MdButtonModule, MdListModule, MdIconModule
} from '@angular/material';

import { TitlebarComponent } from './titlebar/titlebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdSidenavModule,
    MdAutocompleteModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    SharedModule
  ],
  exports: [TitlebarComponent, SidebarComponent],
  declarations: [TitlebarComponent, SidebarComponent]
})
export class NavModule { }
