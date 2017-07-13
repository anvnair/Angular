import { Component, OnInit, Input } from '@angular/core';
import { EmployeeGlobal } from "app/shared/model/employee";

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

@Input() empDetailsProp: EmployeeGlobal;

  constructor() { }
title="Employee Details";
  ngOnInit() {
  }

}
