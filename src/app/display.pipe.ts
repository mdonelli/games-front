import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'display'
})
export class DisplayPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase().replaceAll('_', ' ').replaceAll('-', ' ');
  }

}
