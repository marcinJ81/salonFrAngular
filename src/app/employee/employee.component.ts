import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @ViewChild('empIdInput',{static:false}) empIdInput: ElementRef;
  empHiredInput: boolean = false;
  employeeId: number;
  jobPositionList: JobPositionModel[] = [];
  jobPosition_id: number ;

  constructor(
    private employeeServ: EmployeeService,
    private counterService: CounterServices, 
    private jobService: JobPositionService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.jobPositionList = this.jobService.getAllJobPosition();
    console.log("ngOnInit ");
  }

  NewEmployee(){

    this.employeeId = this.employeeServ.getLastId();
    if(this.employeeId === 0)    
      this.counterService.incrementId();
    this.counterService.setCountNumber(this.employeeId);
    
    if(!this.jobService.getJobPosition(this.jobPosition_id)[1])   
    {
      console.log("check jobposition " + this.jobService.getJobPosition(this.jobPosition_id)[1]);
      return;
    }
    let employee: EmployeeModel = new EmployeeModel(
      this.counterService.counter,
      this.empNameInput.nativeElement.value,
      this.jobService.getJobPosition(this.jobPosition_id)[0],
      this.empHiredInput
      );
    this.employeeServ.addNewEmployee(employee);
  }

  SelectedItem(jobPos_id : number){
    console.log("jobPos_id  " + jobPos_id);
      this.jobPosition_id = jobPos_id;
  }

  OnEditionEmployee(){
    console.log("employee_id to edition: " +this.empIdInput.nativeElement.value);
    this.router.navigate([this.empIdInput.nativeElement.value,'edit'],{relativeTo : this.route});
  }


}
