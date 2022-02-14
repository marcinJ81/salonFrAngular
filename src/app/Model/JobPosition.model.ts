export class JobPositionModel{
    public position_id: number;
    public position_title: string;

    constructor(id: number, title:string){
        this.position_id = id;
        this.position_title = title;
    }
}