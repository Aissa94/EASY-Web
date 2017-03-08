import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'level.component.html'
})

export class LevelComponent {

  constructor(private router: Router) { }
  group() {
    
            this.router.navigate(['components/group']); 
        }
}