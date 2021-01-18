import { Item } from "./item";
import { Person } from "./person";

export interface Order{
    customer: Person;
    item: Item;
    date: Date;
}