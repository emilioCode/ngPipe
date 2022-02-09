import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    console.log('value: ' + value);
    console.log('args: ' + args);

    return value.sort((a,b) => {
      let x = args? a[args].toLowerCase() : a.toLowerCase();
      let y = args? b[args].toLowerCase(): b.toLowerCase();

      if(x<y){
        return -1;
      }else{
        return 1;
      }
      return 0

    })
  }

}
