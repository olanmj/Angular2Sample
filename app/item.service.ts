import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()

export class ItemService {
    items: string[]; // = ['First Item', 'Second Item', 'Penultimate Item', 'Last Item'];
    private itemUrl = 'api/items.json';

    constructor(private http: Http) {}

    getItems(): Observable<string[]> {
        return this.http.get(this.itemUrl)
           .map((resp: Response) => resp.json() as string[]);
    }

    // getItems() : string[] {
    //    return this.items;
    // }
}