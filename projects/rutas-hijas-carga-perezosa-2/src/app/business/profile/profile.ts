import { Component } from '@angular/core';

console.log('PROFILE FILE LOADED');

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor() {
    console.log('constructor Profile');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Profile');
  }
}
