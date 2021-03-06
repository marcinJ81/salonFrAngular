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

    getEmployeeById(id: number) : [EmployeeModel,boolean]{
        if(this.employeeRow.length === 0)
            return [null, false];
        if(!this.employeeRow.some(x => x.emp_id === id))
            return [null,false]
        return [this.employeeRow.slice().find(x => x.emp_id === id),true];
    } 

    getAllEmployee() : EmployeeModel[]{
        return this.employeeRow;
    }
    

}