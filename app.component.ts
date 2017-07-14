import { Component } from '@angular/core';
//import { EmployeeGlobal } from "app/shared/models/employees";
import { listOfMockEmployees } from './shared/mock-data/mock-employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super cool apps with Angular and Node.js';
}