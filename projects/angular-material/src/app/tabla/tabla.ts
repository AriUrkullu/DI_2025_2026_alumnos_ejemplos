import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tabla',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla implements AfterViewInit {

  displayedColumns: string[] = ['id', 'nombre', 'edad'];

  // 👉 Tu array de datos
  datos = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'Ana', edad: 30 },
    { id: 3, nombre: 'Luis', edad: 28 },
    { id: 4, nombre: 'Alaitz', edad: 36 },
    { id: 5, nombre: 'Charlie', edad: 47 },
    { id: 6, nombre: 'Miguel', edad: 40 },
    { id: 7, nombre: 'Eneko', edad: 42 },
    { id: 8, nombre: 'Anne', edad: 29 },
    { id: 9, nombre: 'Alazne', edad: 33 },
    { id: 10, nombre: 'Koldo', edad: 45 },
    { id: 11, nombre: 'Amaia', edad: 36 },
    { id: 12, nombre: 'Alex', edad: 42 },
    // ... los que quieras
  ];

  //dataSource = new MatTableDataSource<any>(this.datos);
  dataSource = new MatTableDataSource(this.datos);

  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //
  aplicarFiltro(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
