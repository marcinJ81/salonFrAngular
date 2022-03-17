import { Component, OnInit, ViewChild,ElementRef ,DoCheck} from '@angular/core';
import { EmployeeModel } from '../Model/Employee.model';
import { JobPositionModel } from '../Model/JobPosition.model';
import { EmployeeService } from '../service/employee.service';
import { CounterServices } from '../service/counter.services';
import { JobPositionService } from '../service/jobPosition.service';

@Component({
  selector: 'app-employee'
  ,templateUrl: './employee.component.html'
  ,styleUrls: ['./employee.component.css']
  ,providers: [CounterServices]
})
export class EmployeeComponent implements OnInit,DoCheck {
  @ViewChild('empNameInput',{static:false}) empNameInput: ElementRef;
  @ViewChild('empPositionInput',{static:false}) empPositionInput: ElementRef;
  empHiredInput: boolean = false;
  employeeId: number;
  jobPositionList: JobPositionModel[] = [];

  constructor(
    private employeeServ: EmployeeService,
    private counterService: CounterServices, 
    private jobService: JobPositionService) { }

  ngDoCheck(){
   // this.jobPositionList = this.jobService.getAllJobPosition();
   // console.log("ngDoCheck " + this.jobPositionList.length);
  }

  ngOnInit(): void {
    this.jobPositionList = this.jobService.getAllJobPosition();
    console.log("ngOnInit ");
  }

  NewEmployee(){

    this.employeeId = this.employeeServ.getLastId();
    if(this.employeeId === 0)    
      this.counterService.incrementId();
    this.counterService.setCountNumber(this.employeeId);
    console.log("new employee: " + this.empHiredInput);

    let employee: EmployeeModel = new EmployeeModel(
      this.counterService.counter,
      this.empNameInput.nativeElement.value,
      this.jobPositionList[0],
      this.empHiredInput
      );
    this.employeeServ.addNewEmployee(employee);
  }

}
