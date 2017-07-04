import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdTabsModule, MdInputModule, MdCheckboxModule, MdIconModule, MdButtonModule } from '@angular/material';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MdCardModule,
    MdTabsModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MdIconModule,
    SharedModule
  ],
  declarations: [EditComponent, ViewComponent],
  exports: [EditComponent, ViewComponent]
})
export class EventModule { }
