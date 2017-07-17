import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees-list/employees-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeedetailsComponent } from './employees/employeedetails/employeedetails.component';
import { appRouting } from "app/app.routing";
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeSectionComponent } from "app/employees/EmployeeSectionComponent";

@NgModule({
  declarations: [
    AppComponent,  
    AboutComponent,
    EmployeesComponent,
    NavbarComponent,
    NotFoundComponent,
    EmployeedetailsComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeSectionComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
