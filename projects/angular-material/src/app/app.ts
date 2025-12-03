import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-material');

  nombreUsuario: string = '';

  saludar() {
    // alert(`Hola, ${this.nombreUsuario || 'Invitado'}!`);
    let nombreAMostrar: string ='';
    // var variable global, let variable de bloque
    if (this.nombreUsuario) {
        nombreAMostrar = this.nombreUsuario;
    } else {
        nombreAMostrar = 'Invitado';
    }
    alert("Hola, " + nombreAMostrar + "!");
  }

}
