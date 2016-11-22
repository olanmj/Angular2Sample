import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()

export class ItemService {
    // v.1 Item array hard coded with getter shown below to provide access
    items: string[]; // = ['First Item', 'Second Item', 'Penultimate Item', 'Last Item'];
    private itemUrl = 'api/items.json';

    constructor(private http: Http) {}

    getItems(): Observable<string[]> {
        return this.http.get(this.itemUrl)
           .map((resp: Response) => resp.json() as string[]);
    }
    // v.1 getter method
    // getItems() : string[] {
    //    return this.items;
    // }
}