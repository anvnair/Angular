import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { Http } from "@angular/http";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  gridData: Employee[];

  constructor(private service: EmployeesService) { }

  ngOnInit() {
    const employeesUrl = 'http://localhost:3000/api/employees';
    this.service.getEmployees()
      .subscribe(response => {
        // let localEmployees = response.json();
        // console.log(localEmplo)yees);
          this.gridData = response.json();
      });
  }


}
