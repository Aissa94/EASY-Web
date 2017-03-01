import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'test.component.html'
})
export class TestComponent {
  members: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.members = this.af.database.list('/members') as FirebaseListObservable<any[]>;
    console.log("1 :"+this.members[1].name);
  }

  ngOnInit(){
      this.members = this.af.database.list('/members') as FirebaseListObservable<any[]>;
      console.log("2 :"+this.members[2].name);
  }

}