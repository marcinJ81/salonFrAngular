import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class CounterServices{
    counter: number = 0;

    incrementId(){
        this.counter++;
        console.log('counter += ' +this.counter);
    }
    decrementId(){
        console.log('counter before -= ' +this.counter);
        if(this.counter > 0)
        {
            this.counter--;
        }

    }
    setCountNumber(id: number){
        this.counter = id;
        console.log('old counter value = ' + id);
        this.counter++;
    }

    getNumber(){
        return this.counter;
    }

}