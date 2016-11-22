# Angular2 Sample
Basic demo with components and services

Based on the QuickStart guide at [angular.io](https://angular.io/docs/ts/latest/quickstart.html), including the configuration files provided there. Also the `index.html` which loads the app on the home page.

Install the packages by running `npm start` in the project directory.

###`app.module.ts`
Includes import of `HttpModule` for implementing a service that gets data from an HTTP request, and declarations of `AppComponent` and `ItemsComponent`.

###`app.component.ts`
The main component with template that displays titles and includes the selector for inserting the list of items.

###`items.component.ts`
Component which supplies the list of items (strings). Original version hard coded the items in the class with
```javascript
items : string[] = ["Item1", "Item2", "Item3", "Item4"];
```
Second version injects an `ItemService` provider to fetch the data items using the service's getter method.
Final version uses the modified `ItemService` provider which now supports asynchronous access to the data service.

###`item.service.ts`
First version hard coded the list of items and provided a getter method for access. 
Second version gets data with an HTTP request. Here the data is fetched from a json file in the application. If using an API call to a server, its url must be provided as `itemUrl`.
The `getItems()` method returns an `Observable` array of strings to provide asynchronous and event-based access.

  




