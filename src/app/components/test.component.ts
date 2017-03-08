import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
    selector: 'my-test',
    templateUrl: './test.component.html',
    providers: [FirebaseService]
})
export class TestComponent  { 
    employees :any = [];

    constructor(private _firebaseService: FirebaseService){}

    onClic(){//testService
        this._firebaseService.getUsers()
            .subscribe(
                data => {console.log(data)},
                error => alert(error),
            );
    }
}