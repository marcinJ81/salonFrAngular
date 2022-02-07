export  class EmployeeModel{
    public emp_id: number;
    public emp_name: string;
    
    constructor(
        id: number
        ,name: string)
        {
            this.emp_id = id;
            this.emp_name = name;
        }
}