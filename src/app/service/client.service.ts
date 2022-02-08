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

  /*  getAllClients(){
        return this.clientRow.slice();
    }*/
    

    deleteLAstClient(id: number ){
        console.log('delete ' + id);
        this.clientRow.splice(id,1);
        
    }

}