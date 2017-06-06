import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdChipsModule, MdCardModule, MdInputModule, MdIconModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MdCardModule,
    MdInputModule,
    MdChipsModule,
    MdButtonModule,
    MdIconModule,
    SharedModule
  ],
  declarations: [EditComponent, ViewComponent],
  exports: [EditComponent, ViewComponent]
})
export class GroupModule { }
