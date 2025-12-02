import { Component } from '@angular/core';

console.log('COMMENTS FILE LOADED');

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.css',
})
export class Comments {

  constructor() {
    console.log('constructor Comments');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Comments');
  }

}
