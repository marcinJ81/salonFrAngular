import { Component, OnInit, ViewChild,ElementRef,Input } from '@angular/core';
import { ClientModel } from '../Model/Client.model';

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
  @Input() clients: ClientModel;

  constructor() { }

  NewClient(){
    const newId: number  = 1;
    const newName: string = this.clNameInputRef.nativeElement.value;
    const newSName: string = this.clSNameInputRef.nativeElement.value;
    const newPhone: string = this.clPhoneInput.nativeElement.value;
    const newDesc: string = this.clDescInput.nativeElement.value;
    this.clients = new ClientModel(newId,newName,newSName,newPhone,newDesc);
  }

  ngOnInit(): void {
  }

}
