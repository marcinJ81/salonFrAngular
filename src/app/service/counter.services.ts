export class CounterServices{
    counter: number = 0;

    incrementId(){
        this.counter++;
        console.log('counter = ' +this.counter);
    }
    decrementId(){
        if(this.counter > 0)
            this.counter--;
        console.log('counter = ' +this.counter);
    }
}