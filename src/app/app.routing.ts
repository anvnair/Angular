import { AboutComponent } from "app/about/about.component";
import { EmployeesComponent } from "app/employees/employees-list/employees-list.component";
import { EmployeedetailsComponent } from "app/employees/employeedetails/employeedetails.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeCreateComponent } from "app/employees/employee-create/employee-create.component";
import { EmployeeEditComponent } from "app/employees/employee-edit/employee-edit.component";
import { EmployeeSectionComponent } from "app/employees/EmployeeSectionComponent";

const appRoutes: Routes = [
  
  {
    path: 'about',
    component: AboutComponent
  },
  {
path:'employees',
component:EmployeeSectionComponent,
children:[
  {
    path: '',
    component: EmployeesComponent
  }
   ,{
    path: 'create',
    component: EmployeeCreateComponent
  }
  ,{
    path: ':id',
    component: EmployeedetailsComponent
  }
  ,{
    path: ':id/edit',
    component: EmployeeEditComponent
  }
  ]
  }
  , {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting=RouterModule.forRoot(appRoutes);