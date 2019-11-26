import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {EmployeeService} from './employees/employee.service';
import { EmployeesdisplayEmployeeComponent } from './employees/employeesdisplay-employee.component';

const appRoutes:Routes=[
  {path: "list",component: ListEmployeesComponent},
  {path: "create",component: CreateEmployeeComponent},
  {path: "",redirectTo:'/list',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EmployeesdisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes),
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
