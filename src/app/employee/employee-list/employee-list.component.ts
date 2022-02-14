import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmployeeModel } from 'src/app/Model/Employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: EmployeeModel[];

  constructor(private employeeServ: EmployeeService) { }

  ngOnInit(): void {
    
    this.employeeList = this.employeeServ.employeeRow;
    
  }

}
