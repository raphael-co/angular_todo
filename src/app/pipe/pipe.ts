import { Pipe, PipeTransform } from '@angular/core';
import { Arr } from '../models/arr';

@Pipe({
    name: 'taskFilter',
    pure: false
  })
export class FilterTaskFini implements PipeTransform {

  transform(bool: Arr[], reussis: boolean): Arr[] {
    return bool.filter(t => t.reussis == reussis);
  }

}