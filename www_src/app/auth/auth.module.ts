import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdButtonModule, MdIconModule, MdSelectModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { ProviderLoginService } from './providers/provider-login.service';
import { FacebookService, GoogleService } from './providers/sources';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdSelectModule,
    MdIconModule,
    SharedModule
  ],
  exports: [LoginComponent, RegisterComponent],
  providers: [ProviderLoginService, FacebookService, GoogleService],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
