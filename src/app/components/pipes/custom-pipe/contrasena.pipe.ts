import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    if (activar) {
      let cadena = '';
      for (let index = 0; index < value.length; index++) {
        cadena += '*';
      }
      return cadena;
    } else {
      return value;
    }
  }

}
