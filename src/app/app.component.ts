import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprojDIEGOSOMOVILLA15';
  condicion:boolean = true;
  dias_semana: string = '';
  vblecolor:string ='vblecolor'
  libros: Array<{id: string, titulo: string, autor: string}> = [];
  verAutor: string = '';
  constructor() {
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
      ]
      }
      showAuthor(libro: {id: string, titulo: string, autor: string}): void {
        this.verAutor = 'Escrito por: ' + libro.autor;
        alert(this.verAutor);
        console.log(libro.titulo, 'escrito por', libro.autor);
      }
        
}
