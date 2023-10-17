import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly products = faker.helpers.uniqueArray(faker.commerce.product, 100).map((name) => ({ name }));
  readonly groupByFirstLetterOfName = (element: { name: string }) => element.name[0];
}
