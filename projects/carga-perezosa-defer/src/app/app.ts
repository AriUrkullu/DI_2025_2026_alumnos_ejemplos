import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comments } from './comments/comments';

console.log('APP FILE LOADED');

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Comments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
    constructor() {
    console.log('constructor App');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy App');
  }

}
