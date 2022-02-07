export  class ServicesModel{
    public serv_id: number;
    public serv_name: string;
    
    constructor(
        id: number
        ,name: string)
        {
            this.serv_id = id;
            this.serv_name = name;
        }
}