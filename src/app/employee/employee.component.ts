import { Component, OnInit, ViewChild,ElementRef ,DoCheck, Input, Output,EventEmitter} from '@angular/core';
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
export class EmployeeComponent implements OnInit {
  @ViewChild('empNameInput',{static:false}) empNameInput: ElementRef;
  @ViewChild('empPositionInput',{static:false}) empPositionInput: ElementRef;
  empHiredInput: boolean = false;
  employeeId: number;
  jobPositionList: JobPositionModel[] = [];
  jobPosition_id: number ;


  constructor(
    private employeeServ: EmployeeService,
    private counterService: CounterServices, 
    private jobService: JobPositionService) { }



  ngOnInit(): void {
    this.jobPositionList = this.jobService.getAllJobPosition();
    console.log("ngOnInit ");
  }

  NewEmployee(){

    this.employeeId = this.employeeServ.getLastId();
    if(this.employeeId === 0)    
      this.counterService.incrementId();
    this.counterService.setCountNumber(this.employeeId);
    

    let employee: EmployeeModel = new EmployeeModel(
      this.counterService.counter,
      this.empNameInput.nativeElement.value,
     this.jobService.getJobPosition(this.jobPosition_id),
      this.empHiredInput
      );
    this.employeeServ.addNewEmployee(employee);
  }

  SelectedItem(jobPos_id : number){
    console.log("jobPos_id  " + jobPos_id);
   

      this.jobPosition_id = jobPos_id;
  }

}
