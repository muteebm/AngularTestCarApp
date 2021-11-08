import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-stats',
  templateUrl: './home-stats.component.html',
  styleUrls: ['./home-stats.component.scss']
})
export class HomeStatsComponent implements OnInit {

  cards = [];

  constructor() { }

  ngOnInit(): void {
    this.cards.length = 6
  }

}
