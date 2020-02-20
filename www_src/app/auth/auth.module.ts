import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FacebookService, GoogleService } from './providers';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        SharedModule
    ],
    exports: [LoginComponent, RegisterComponent],
    providers: [FacebookService, GoogleService],
    declarations: [LoginComponent, RegisterComponent, LogoutComponent]
})
export class AuthModule { }
