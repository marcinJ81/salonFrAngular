export class ServicesModel{
    public serv_id: number;
    public serv_name: string;
    public serv_price: number;
    
    constructor(id: number,name: string, price: number ){
        this.serv_id = id;
        this.serv_name = name;
        this.serv_price = price;
    }

}