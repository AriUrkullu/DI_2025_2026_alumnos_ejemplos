import { Component } from '@angular/core';

console.log('TABLES FILE LOADED');

@Component({
  selector: 'app-tables',
  imports: [],
  templateUrl: './tables.html',
  styleUrl: './tables.css',
})
export class Tables {
  constructor() {
    console.log('constructor Tables');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Tables');
  }
}
