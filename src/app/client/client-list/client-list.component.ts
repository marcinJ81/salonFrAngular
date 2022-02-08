import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/Model/Client.model';
import { ClientServices } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients:  ClientModel[];
  constructor(private clientServices: ClientServices) { }

  ngOnInit(): void {

    console.log('client-list: ' );
    this.clients = this.clientServices.clientRow;
    
  }

}
