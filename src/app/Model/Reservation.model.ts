import { Time } from "@angular/common";

export  class ReservationModel{
    public res_id: number;
    public res_date: Date;
    public res_time: Time;
    public cl_id: number;
    public ser_id: number;
    public emp_id: number;

    constructor(
        id: number
        ,date: Date
        ,time: Time
        ,cl_id: number
        ,ser_id: number
        ,emp_id: number)
        {
            this.res_id = id;
            this.res_date = date;
            this.res_time = time;
            this.cl_id = cl_id;
            this.ser_id = ser_id;
            this.emp_id = emp_id;
        }
}