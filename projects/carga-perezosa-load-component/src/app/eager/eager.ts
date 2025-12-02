import { Component } from '@angular/core';

console.log('EAGER FILE LOADED');

@Component({
  selector: 'app-eager',
  imports: [],
  templateUrl: './eager.html',
  styleUrl: './eager.css',
})
export class Eager {
  constructor() {
    console.log('constructor Eager');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Eager');
  }
}
