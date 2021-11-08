import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = []
  selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.cards.length = 4
  }

  selectIndex(index: number): void {
    console.log(index)
    this.selectedIndex = index;
  }

}
