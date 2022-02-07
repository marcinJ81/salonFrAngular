import { EventEmitter } from '@angular/core';
import { ClientModel } from '../Model/Client.model';

export class ClientServices{
    clientRow: ClientModel;
    newClient = new EventEmitter<ClientModel>();

    
    constructor(){}

    addNeClient(client: ClientModel){
        this.newClient.emit(client);
    }

    getAllClients(){

    }

}