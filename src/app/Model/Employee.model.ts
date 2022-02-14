import {JobPositionModel} from './JobPosition.model';

export class EmployeeModel{
    public emp_id: number;
    public emp_name: string;
    public jobPosition: JobPositionModel;
    public emp_hired: boolean;

    constructor(id: number,name: string, position:JobPositionModel,hired: boolean){
        this.emp_id = id;
        this.emp_name = name;
        this.jobPosition = position;
        this.emp_hired = hired;
    }

}