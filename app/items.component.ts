import { Component } from '@angular/core';
import {ItemService} from './item.service';

@Component({
    selector: 'items',
    template: `<ul *ngFor='let item of items'>
       <li>{{item}}</li>
    </ul>`,
    providers: [ItemService]
})

export class ItemsComponent {

    items: string[];

    constructor(itemService: ItemService) {
        itemService.getItems()
            .subscribe(items => this.items = items,
            error => console.error('************ Error **********')
            );
    }

  // Hard coded items used before moved to the ItemService: 
  //  items : string[] = ["Item1", "Item2", "Item3", "Item4"];
}