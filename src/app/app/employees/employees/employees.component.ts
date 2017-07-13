import { Component } from '@angular/core';
import {EmployeeGlobal} from 'app/shared/model/employee';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    title: string = 'List of Emoployees';
    numofEmployees = 150;

globalEmp:EmployeeGlobal={
    first_name:"sample",last_name:"anish",emp_no:89
};

    employee = {
        emp_no: 156,
        first_name: 'Rajesh',
        last_name: 'Rajendran',
        cities: ['Trivandrum', 'Banglore', 'Cochi']
    };
    cityname: string = 'Delhi';
    listOfEmployees = [{
        emp_no: 156,
        first_name: 'Rajesh',
        last_name: 'Rajendran'
    },
    {
        emp_no: 157,
        first_name: 'Anish',
        last_name: 'VR'
    },
    {
        emp_no: 158,
        first_name: 'test',
        last_name: '123'
    }
    ];

    actors = ['Deepika', 'Dulqar', 'Raju']

    testCity() {
        console.log(this.cityname);
    }

    showEmployees() {

    }

}

