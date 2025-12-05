import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../interfaceproducto';
import { Servicioproducto } from '../servicioproducto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productolista',
  imports: [CommonModule, FormsModule],
  templateUrl: './productolista.html',
  styleUrl: './productolista.css',
})
export class Productolista implements OnInit {
  productos: Producto[] = [];
  nuevoProducto: Producto = { nombre: '', precio: 0 };
  productoSeleccionado: Producto | null = null;
  productoService: Servicioproducto = inject(Servicioproducto);

  productoEnEdicion: Producto = { nombre: '', precio: 0 };

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
      },
      complete: () => {
        console.log('Carga de productos completada.');
      }
    });
  }

  seleccionarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
    this.productoEnEdicion = { ...producto };  // creo una COPIA para editar
  }

  borrarProducto(id?: string) {
    this.productoService.borrarProducto(id).subscribe({
      next: () => {
        this.productos = this.productos.filter(p => p.id !== id);
      },
      error: (err) => {
        console.error('Error al borrar producto', err);
      }
    });
  }

  actualizarProducto() {
    if (this.productoSeleccionado) {
      const productoParaActualizar: Producto = {
        ...this.productoEnEdicion,                  // tomo los datos editados
        id: this.productoSeleccionado.id            // me aseguro de mantener el id original
      };

      this.productoService.actualizarProducto(productoParaActualizar).subscribe({
        next: (productoActualizado) => {
          // productoActualizado, es el dato que el servidor devuelve (el producto modificado)
          const index = this.productos.findIndex(p => p.id === productoActualizado.id);
          if (index !== -1) {
            this.productos[index] = productoActualizado; // si encuentra el producto en la lista
          }
          this.resetEdicion();
        },
        error: (err) => {
          console.error('Error al actualizar producto', err);
        }
      });
    }
  }

  cancelarEdicion() {
    this.resetEdicion();
  }

  private resetEdicion() {
    this.productoSeleccionado = null;
    this.productoEnEdicion = { nombre: '', precio: 0 };
  }

  crearProducto() {
    const ids = this.productos
    .map(p => Number(p.id)) // Se hace una proyección de cada elemento del array original a un array de enteros conteniendo los identificadores
    .sort((a, b) => a - b); // Ordena el array usando una funcion de comparacion pasada por parametro

    let nuevoId = 1; // Se busca cual será el nuevo identificador
    for (const id of ids) {
      if (id === nuevoId) {
        nuevoId++;          // este está ocupado, pasamos al siguiente
      } else if (id > nuevoId) {
        break;              // hemos encontrado un hueco
      }
    }

    this.nuevoProducto.id = String(nuevoId);  // Se carga el indentificador en nuevo producto

    this.productoService.agregarProducto(this.nuevoProducto).subscribe({
      next: (producto) => {
        this.productos.push(producto);
        this.nuevoProducto = { nombre: '', precio: 0 }; // Limpiar formulario
      },
      error: (err) => {
        console.error('Error al crear producto', err);
      }
    });
  }
}
