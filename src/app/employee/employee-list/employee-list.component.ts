import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: EmployeeModel[];
  constructor() { }

  ngOnInit(): void {
    this.employeeList =  [
        new EmployeeModel(
          
        );
    ]
  }

}
