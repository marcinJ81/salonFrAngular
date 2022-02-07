export  class ClientModel{
    public cl_id: number;
    public cl_name: string;
    public cl_surname: string;
    public cl_phone: string;
    public cl_description: string;
    constructor(
        id: number
        ,name: string
        ,sname: string
        ,phone: string
        ,descritp: string
        )
        {
            this.cl_id = id;
            this.cl_name = name;
            this.cl_surname = sname;
            this.cl_phone = phone;
            this.cl_description = descritp;
        }
}