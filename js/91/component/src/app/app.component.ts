import { Component } from '@angular/core';
import Category from 'src/shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component';

  categories: Category[] = [{
    name: 'Clothing',
    items: [{
      name: 'Shirt',
      price: 5.69
    }
    ]
  }]
}
