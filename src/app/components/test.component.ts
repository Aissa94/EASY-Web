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
        this._fireService.getEmployees()
            .subscribe(
                data => this.employees = data,
                error => alert(error),
                () => console.log("Finished")
            );
    }
}