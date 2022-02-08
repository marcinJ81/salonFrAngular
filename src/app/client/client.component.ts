import { Component, OnInit, ViewChild,ElementRef,Input,EventEmitter,Output } from '@angular/core';
import { ClientModel } from '../Model/Client.model';
import { ClientServices } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @ViewChild('clNameInput',{static:false}) clNameInputRef: ElementRef;
  @ViewChild('clSNameInput',{static:false}) clSNameInputRef: ElementRef;
  @ViewChild('clPhoneInput',{static:false}) clPhoneInput: ElementRef;
  @ViewChild('clDescInput',{static:false}) clDescInput: ElementRef;

  constructor(private clientServices: ClientServices ) { }

  ngOnInit(): void {
  }

  NewClient(){
    const newId: number  = 1;
    console.log('app-client -> new client = ' + newId);
    const newName: string = this.clNameInputRef.nativeElement.value;
    const newSName: string = this.clSNameInputRef.nativeElement.value;
    const newPhone: string = this.clPhoneInput.nativeElement.value;
    const newDesc: string = this.clDescInput.nativeElement.value;
    this.clientServices.addNewClient(new ClientModel(newId,newName,newSName,newPhone,newDesc));
  }

}
