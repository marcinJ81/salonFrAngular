import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientModel } from 'src/app/Model/Client.model';
import { ClientServices } from 'src/app/service/client.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  client: ClientModel;
  id: number;
  
  constructor(private route: ActivatedRoute, private clientService: ClientServices ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if(this.clientService.GetClientById(this.id)[1])
          this.client = this.clientService.GetClientById(this.id)[0];
        console.log("edition client_name : " + this.client.cl_name);
      }
    );
  }

}
