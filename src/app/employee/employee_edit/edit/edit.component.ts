import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  id: number;

  constructor(private route: ActivatedRoute, private empService: EmployeeService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.employee = this.empService.getEmployeeById(this.id);
      }
    );

    
  }

}
