import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MdListModule, MdCardModule, MdInputContainer, MdInputModule,
         MdButtonModule, MdSelectModule, MdIconModule } from '@angular/material';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    MdSelectModule,
    MdIconModule,
    SharedModule
  ],
  declarations: [ViewComponent, EditComponent],
  exports: [ViewComponent, EditComponent]
})
export class UserModule { }
