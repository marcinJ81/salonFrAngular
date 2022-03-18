import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from 'src/app/Model/Employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('empNameInput',{static:false}) empNameInput: ElementRef;
  employee: EmployeeModel;

  constructor(private route: ActivatedRoute, private empService: EmployeeService ) { }

  ngOnInit(): void {
    let result = this.empService.getAllEmployee().some(x => x.emp_id ===this.route.snapshot.params['id'] );
    console.log("ngOnInit " + result);
    this.employee = this.empService.getEmployeeById(this.route.snapshot.params['id']);
  }

}
