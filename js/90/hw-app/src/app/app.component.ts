import { Component } from '@angular/core';
import { Order } from "./shared/order";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hwapp';

  hwapp: Order = {
    customer: {
      firstName: 'Shlomo',
      lastName: 'Hershfeld',
      address: {
        street: '730 W Kennedy Boulevard',
        city:'Lakewood',
        state: 'NJ',
        zip: '08701'
      }

    },
    item: {
      name: 'gloves',
      price: 5
    },
    date: new Date()
  }
}
