import { EventEmitter } from '@angular/core';
import { ClientModel } from '../Model/Client.model';

export class ClientServices{
    
    public clientRow: ClientModel[];
    newClient = new EventEmitter<ClientModel>();

    
    constructor(){
        this.clientRow = [new ClientModel(2,'test imie','test nazwiskso','tel','opis')]
    }

    addNewClient(client: ClientModel){
        console.log('addnewcliwnt ' + client.cl_id);
        this.clientRow.push(client);
        this.newClient.emit(client);
    }

    getAllClients(){
        return this.clientRow.slice();
    }

}