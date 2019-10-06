import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer
  ) {
    console.log(1);
  }

  transform(value: string, url: string): any {
    console.log(value);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value)
  }

}
