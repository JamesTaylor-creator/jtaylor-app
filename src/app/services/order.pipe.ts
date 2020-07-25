import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { MembersComponent } from '../members/members.component';


@Pipe({
  name: 'orderBy'
})
export class OrderBy implements PipeTransform {
    transform(items:any[], order = '', column: string = ''): any[]{
        if (!items || order == '' || !order ){
            return items;
        }
        if (items.length <= 1){
            return items;
        }
        if (!column || column == ''){
            if (order == 'dec') {
                return items.sort();
        } else {
            return items.sort().reverse();
        }
    }
    return orderBy(items, [column], [order]);
  }
}