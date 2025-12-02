import { Component } from '@angular/core';

console.log('DASHBOARD FILE LOADED');

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor() {
    console.log('constructor Dashboard');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Dashboard');
  }
}
