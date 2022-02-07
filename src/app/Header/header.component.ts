import { Component,EventEmitter, Output  } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.compomnent.html'
})
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        console.log(' click ' + feature )
        this.featureSelected.emit(feature);
    }


}