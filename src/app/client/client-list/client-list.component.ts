import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/Model/Client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  client:  ClientModel[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
