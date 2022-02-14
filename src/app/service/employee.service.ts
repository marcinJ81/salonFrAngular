import { EventEmitter,Injectable } from '@angular/core';
import { EmployeeModel } from '../Model/Employee.model';

@Injectable()
export class EmployeeService{
    public employeeRow: EmployeeModel[] = [];
    newEmployee = new EventEmitter<EmployeeModel>();

    addNewEmployee(employee: EmployeeModel){
        
         this.employeeRow.push(employee);
        console.log('addNewEmployee ' + employee.emp_id);
        this.newEmployee.emit(employee);
       
    }

    getLastId(): number{
        if(this.employeeRow.length === 0)
            return 0;
        return this.employeeRow[this.employeeRow.length-1].emp_id;
    }
    

}