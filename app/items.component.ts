import { Component } from '@angular/core';
import {ItemService} from './item.service';

@Component({
    selector: 'items',
    templateUrl: './app/items.component.html',
    providers: [ItemService]
})

export class ItemsComponent {

    items: string[];

    constructor(itemService: ItemService) {
        itemService.getItems()
            .subscribe(items => this.items = items,
            error => console.error('* Error *')
            );
    }

  // v.2 Injected a service with a getter function 
  // constructor(itemService: ItemService) {
  //      itemService.getItems();
  // }
  
  // v.1 Hard coded items used before moved to the ItemService: 
  //  items : string[] = ["Item1", "Item2", "Item3", "Item4"];
}