import { Component, OnInit, 
         EventEmitter, Output } from '@angular/core';
import { EmployeeGlobal } from "app/shared/model/employee";

@Component({
  selector: 'create-employee',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  newEmployee: EmployeeGlobal = new EmployeeGlobal();
  
  @Output() employeeCreated = new EventEmitter();
  
  createEmployee() {
    this.employeeCreated.emit(this.newEmployee);
    //this.newEmployee = new EmployeeGlobal();
    //console.log(this.newEmployee);
  }
}