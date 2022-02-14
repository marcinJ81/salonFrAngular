import { Component, OnInit, ViewChild,ElementRef,Input,EventEmitter,Output } from '@angular/core';
import { ClientModel } from '../Model/Client.model';
import { ClientServices } from '../service/client.service';
import { CounterServices } from 'src/app/service/counter.services';

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
 // @ViewChild('clIdInput',{static:false}) clIdInput: ElementRef;
  clId: number;
  constructor(private clientServices: ClientServices,private counterService: CounterServices ) { }

  ngOnInit(): void {
   // this.clId = this.clIdInput.nativeElement.value;
  }

  NewClient(){
    this.counterService.incrementId();
    const newName: string = this.clNameInputRef.nativeElement.value;
    const newSName: string = this.clSNameInputRef.nativeElement.value;
    const newPhone: string = this.clPhoneInput.nativeElement.value;
    const newDesc: string = this.clDescInput.nativeElement.value;
    let clientSource: ClientModel = new ClientModel(this.counterService.counter,newName,newSName,newPhone,newDesc);
    this.clientServices.addNewClient(clientSource);
  }

  DeleteClient(){
      
    if(this.clId === 0 )
    {
      this.clientServices.deleteLAstClient(this.counterService.counter);
      console.log('delete id= ' + this.counterService.counter);
      this.counterService.decrementId();
    }
    else
    {
      this.clientServices.deleteLAstClient(this.clId);
      console.log('delete id= ' + this.clId);
    }

      

  }


 
}


