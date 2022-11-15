import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authRoutes } from './auth.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(authRoutes),
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class FeatureAuthModule {}
