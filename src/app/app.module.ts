import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//import { EmployeesComponent } from './employees/employees/employees.component';
import { AnishComponent } from './anish/anish.component';
import { EmpdetailsComponent } from './app/employees/empdetails/empdetails.component';
import { CreateEmployeeComponent } from './app/employees/create/create.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
   // EmployeesComponent,
    AnishComponent,
    EmpdetailsComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
