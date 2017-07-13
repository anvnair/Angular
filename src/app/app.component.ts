import { Component } from '@angular/core';
import { EmployeeGlobal } from "app/shared/model/employee";
import { listOfMockedEmployees } from "app/shared/mock-data/mock-employees";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-Rajesh';

     listOfEmployees = listOfMockedEmployees;

    employeeFromAppComponent: EmployeeGlobal= {
        emp_no: 156,
        first_name: '111',
        last_name: 'VR'
         
    };

onselect(e){
this.employeeFromAppComponent=e;
console.log(e);
}
ProcessEventResult(e){
  listOfMockedEmployees.push(e);
  console.log(e);
}
}
