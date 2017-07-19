import { Injectable } from '@angular/core';
import{Http} from '@angular/http'
@Injectable()
export class EmployeesService {

  constructor(private http: Http) { }
 employeesUrl = 'http://localhost:3000/api/employees';
getEmployees(){
return this.http.get(this.employeesUrl)
}
}
