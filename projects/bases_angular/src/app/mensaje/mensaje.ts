import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  imports: [CommonModule],
  templateUrl: './mensaje.html',
  styleUrl: './mensaje.css',
})
export class Mensaje {
  esExito: boolean = true;

  cambio() {
    this.esExito=!this.esExito;
  }
}
