import { EventEmitter,Injectable } from '@angular/core';
import { EmployeeModel } from '../Model/Employee.model';
import { CounterServices } from './counter.services';

@Injectable();
export class EmployeeService{
    public employeeRow: EmployeeModel[] = [];
    newEmployee = new EventEmitter<EmployeeModel>();

    addNewEmployee(employee: EmployeeModel){
        
         this.employeeRow.push(employee);
        console.log('addNewEmployee ' + employee.emp_id);
        this.newEmployee.emit(employee);
       
    }

}