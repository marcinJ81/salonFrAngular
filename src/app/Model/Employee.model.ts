import {JobPostionModel} from 'JobPsotion.model';

export class EmployeeModel{
    public emp_name: string;
    public jobPosition: JobPostionModel;
    public emp_hired: boolean;

    constructor(name: string, position:JobPostionModel,hired: boolean){
        this.emp_name = name;
        this.jobPosition = position;
        this.emp_hired = hired;
    }

}