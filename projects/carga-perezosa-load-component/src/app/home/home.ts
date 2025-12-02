import { Component } from '@angular/core';

console.log('HOME FILE LOADED');

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {
    console.log('constructor Home');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Home');
  }
}
