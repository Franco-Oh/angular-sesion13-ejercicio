import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesTesting'
})
export class PipesTestingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
