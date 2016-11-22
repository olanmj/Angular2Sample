import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello Angular app!</h1>
    <div>{{ title }}</div>
    <items></items>
  `
})
export class AppComponent { 
  title: string = "My first Angular app..."
  
}