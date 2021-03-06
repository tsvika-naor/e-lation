import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  MdCardModule, MdListModule, MdChipsModule, MdSelectModule,
  MdButtonModule, MdInputModule, MdIconModule
} from '@angular/material';
import { SharedModule } from '../shared';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MdCardModule,
    MdListModule,
    MdChipsModule,
    MdSelectModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    SharedModule
  ],
  declarations: [EditComponent, ViewComponent],
  exports: [EditComponent, ViewComponent]
})
export class ProviderModule { }
