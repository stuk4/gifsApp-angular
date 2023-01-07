import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent  {

  // Similar al ref de react
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService:GifsService){

  }

  buscar(term:string){
    console.log(term)
    const valor = this.txtBuscar.nativeElement.value

    if(valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';

  }

}
