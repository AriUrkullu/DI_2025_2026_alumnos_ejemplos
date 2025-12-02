import { Component } from '@angular/core';

console.log('LAZY FILE LOADED');

@Component({
  selector: 'app-lazy',
  imports: [],
  templateUrl: './lazy.html',
  styleUrl: './lazy.css',
})
export class Lazy {
  constructor() {
    console.log('constructor Lazy');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Lazy');
  }
}
