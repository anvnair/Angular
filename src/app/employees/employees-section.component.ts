import { Component, OnInit } from '@angular/core';

@Component({

    templateUrl: './employees-section.component.html'
})

export class EmployeesSectionComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log('Debugging is easy with chrome debugger');
    }
}