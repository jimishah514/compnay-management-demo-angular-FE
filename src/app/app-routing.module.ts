import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/authentication/login/login.component';
// import { RegisterComponent } from './components/authentication/register/register.component';
import { AddEmployeeComponent } from './components/home/add-employee/add-employee.component';
import { AddOfficeComponent } from './components/home/add-office/add-office.component';
import { AddTagComponent } from './components/home/add-tag/add-tag.component';
import { EmployeeListComponent } from './components/home/employee-list/employee-list.component';
import { OfficeListComponent } from './components/home/office-list/office-list.component';
import { EmployeeTagListComponent } from './components/home/employee-tag-list/employee-tag-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/viewEmployees', pathMatch: 'full' },
  { path: 'addEmployee', component: AddEmployeeComponent},
  { path: 'addOffice', component: AddOfficeComponent},
  { path: 'addTag', component: AddTagComponent },
  { path: 'viewEmployees', component: EmployeeListComponent},
  { path: 'viewOffices', component: OfficeListComponent },
  { path: 'viewEmployeeTags', component: EmployeeTagListComponent},
  { path: '**', redirectTo: '/viewEmployees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
