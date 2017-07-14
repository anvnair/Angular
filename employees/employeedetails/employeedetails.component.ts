import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private currentRouteInfo:ActivatedRoute,private router : Router) { }
employeeId;
  ngOnInit() {
    this.employeeId=this.currentRouteInfo.snapshot.params["id"];
  }
goBack(){
  this.router.navigate(['/employees']);
}
}
