import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'semestre.component.html'
})

export class SemestreComponent {

  constructor(private router: Router) {  }
  level() {
    
            this.router.navigate(['components/level']); 
        }
}