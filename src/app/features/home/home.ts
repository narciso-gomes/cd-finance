import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";

@Component({
  selector: 'app-home',
  imports: [ Balance],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
   transactions = signal([
    { value: 1500, type: 'income' },
    { value: 1500, type: 'outcome' },
    { value: 2000, type: 'income' },
    { value: 2000, type: 'outcome' },
   ])
}
