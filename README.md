# ngx-list-minimap

Add a component to sort a list of elements and add a minimap to directly access a specific group. Grouping function and templates are customizable.

![screenshot](screenshot.png 'Example')

## Get started

Install the library

```shell
npm install ngx-list-minimap
# or
yarn add ngx-list-minimap
```

Then import the module in your application

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxListMinimapComponent } from 'ngx-list-minimap';

@NgModule({
  imports: [
    ...
    BrowserModule, // needed
    NgxListMinimapComponent,
  ],
  [...]
})
export class AppModule { }
```

Then you can use it

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly products = [...];
  readonly groupByFirstLetterOfName = (element: { name: string }) => element.name[0];
}
```

```html
<!-- app.component.html -->
<ngx-list-minimap [elements]="products" [groupBy]="groupByFirstLetterOfName">
  <ng-template #groupTemplate let-products="elements">
    <div *ngFor="let product of products">
      <ng-container *ngTemplateOutlet="componentTemplate; context: { element: product }"></ng-container>
    </div>
  </ng-template>

  <ng-template #componentTemplate let-product="element">
    <div>{{ product.name }}</div>
  </ng-template>
</ngx-list-minimap>
```

## Api

| Name | Description |
| --- | --- |
| @Input() elements: T[]; | Elements to display |
| @Input() groupBy?: ((element: T) => string) \| (keyof T); | Property or callback function to group elements