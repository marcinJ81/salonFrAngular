import { EventEmitter,Injectable } from '@angular/core';
import { ClientModel } from '../Model/Client.model';
import { CounterServices } from './counter.services';

@Injectable()
export class ClientServices{
    
  /*  public clientRow: ClientModel[] =[
        new ClientModel(1,'test imie','test nazwiskso','tel','opis')
    ];*/
    public clientRow: ClientModel[] = [];
    newClient = new EventEmitter<ClientModel>();

    constructor(private counterServices: CounterServices){}

    addNewClient(client: ClientModel){

        this.clientRow.push(client);
        console.log('addnewclient ' + client.cl_id);
        this.newClient.emit(client);
    }

    getLastId(): number{
        if(this.clientRow.length === 0)
            return 0;
        return this.clientRow[this.clientRow.length-1].cl_id;
    }

  /*  getAllClients(){
        return this.clientRow.slice();
    }*/
    

    deleteLAstClient(id: number ){
        console.log('delete ' + id);
        let idRow: number;
        let tmp = this.clientRow.map(a => a.cl_id === id);
    
        console.log(' clientRow length= ' + this.clientRow.length);
        idRow = this.clientRow.find(x => x.cl_id === id).cl_id;
         console.log('value from table= ' + idRow);   
        this.clientRow.splice(id,1);
        
    }

    

}