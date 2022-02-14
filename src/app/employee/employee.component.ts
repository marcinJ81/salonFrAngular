import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { EmployeeModel } from '../Model/Employee.model';
import { JobPositionModel } from '../Model/JobPosition.model';
import { EmployeeService } from '../service/employee.service';
import { CounterServices } from '../service/counter.services';

@Component({
  selector: 'app-employee'
  ,templateUrl: './employee.component.html'
  ,styleUrls: ['./employee.component.css']
  ,providers: [CounterServices]
})
export class EmployeeComponent implements OnInit {
  @ViewChild('empNameInput',{static:false}) empNameInput: ElementRef;
  @ViewChild('empPositionInput',{static:false}) empPositionInput: ElementRef;
  employeeId: number;

  constructor(private employeeServ: EmployeeService,private counterService: CounterServices ) { }

  ngOnInit(): void {
  }

  NewEmployee(){

    this.employeeId = this.employeeServ.getLastId();
    if(this.employeeId === 0)    
      this.counterService.incrementId();
    this.counterService.setCountNumber(this.employeeId);

    let employee: EmployeeModel = new EmployeeModel(
      this.counterService.counter,
      this.empNameInput.nativeElement.value,
      new JobPositionModel(1,"pracownik"),
      true
      );
    this.employeeServ.addNewEmployee(employee);
  }

}
