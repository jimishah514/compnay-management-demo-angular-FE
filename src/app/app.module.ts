import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared-modules/material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { EmployeeComponent } from './components/home/employee/employee.component';
import { EmployeeListComponent } from './components/home/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/home/add-employee/add-employee.component';
import { AddOfficeComponent } from './components/home/add-office/add-office.component';
import { AddTagComponent } from './components/home/add-tag/add-tag.component';
import { OfficeListComponent } from './components/home/office-list/office-list.component';
import { EmployeeTagListComponent } from './components/home/employee-tag-list/employee-tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    EmployeeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    AddOfficeComponent,
    AddTagComponent,
    OfficeListComponent,
    EmployeeTagListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
