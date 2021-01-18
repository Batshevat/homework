import { Component } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  constructor() { }
    @Input()
    person: Person;
 
}
