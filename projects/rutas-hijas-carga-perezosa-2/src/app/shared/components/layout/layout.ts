import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

console.log('LAYOUT FILE LOADED');

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor() {
    console.log('constructor Layout');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Layout');
  }
}
