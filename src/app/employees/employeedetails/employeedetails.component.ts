import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {listOfMockEmployees} from "app/shared/mock-data/mock-employees";
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  // styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private currentRouteInfo:ActivatedRoute,private router : Router) { }
employeeId;
selectedEmpDetails;
  ngOnInit() {
    this.employeeId=this.currentRouteInfo.snapshot.params["id"];
    this.selectedEmpDetails=listOfMockEmployees.find(f=>f.emp_no.toString()===this.employeeId);
debugger;
  }
goBack(){
  
  this.router.navigate(['/employees']);
}
}
