import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

console.log('ADMIN FILE LOADED');

@Component({
  selector: 'app-admin',
  imports: [RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  constructor() {
    console.log('constructor Admin');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Admin');
  }
}
