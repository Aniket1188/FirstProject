import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycodes',
  standalone: true
})
export class CountrycodesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "+91-"+value;
  }

}
