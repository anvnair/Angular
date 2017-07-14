import { AboutComponent } from "app/about/about.component";
import { EmployeesComponent } from "app/employees/employees.component";
import { EmployeedetailsComponent } from "app/employees/employeedetails/employeedetails.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { HomeComponent } from "app/home/home.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  }
  ,{
    path: 'employees/:id',
    component: EmployeedetailsComponent
  }
  , {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting=RouterModule.forRoot(appRoutes);