import { ClientModel } from 'Client.model'

export class ReservationModel{
    public reservationDate: string;
    public reservationTime: string;
    public clientList: ClientModel[];

    constructor(res_date: string,res_time: string, cl_list: ClientModel[]){
        this.reservationDate = res_date;
        this.reservationTime = res_time;
        this.clientList = cl_list;
    }
}