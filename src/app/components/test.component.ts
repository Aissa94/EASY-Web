import { Component } from '@angular/core';
import { FireService } from '../services/firebase.service';

@Component({
    selector: 'my-test',
    templateUrl: './test.component.html',
    providers: [FireService]
})
export class TestComponent  { 
    employees :any = [];

    constructor(private _fireService: FireService){}

    onClic(){//testService
        this._fireService.getUsers()
            .subscribe(
                data => {this.employees = data;console.log(this.employees)},
                error => alert(error),
            );
    }
}