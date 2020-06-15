import { Component, OnInit } from '@angular/core';
import { SelectedQuadrado } from '../selected-quadrado';

@Component({
  selector: 'app-quadrado-list',
  templateUrl: './quadrado-list.component.html',
  styleUrls: ['./quadrado-list.component.scss'],
})
export class QuadradoListComponent implements OnInit {
  positions: SelectedQuadrado[] = [];
  p1: string = 'x';
  p2: string = 'o';
  turn: string;
  constructor() {}

  ngOnInit(): void {
    this.turn = this.p2;
    for (let i = 0; i < 9; i++) {
      this.positions.push({
        disabled: false,
        selected: '',
      });
    }
  }

  handleSelect(event) {
    const { index, disabled } = event;

    if (!disabled) {
      this.toggleTurn();
      this.positions[index].disabled = true;
      this.positions[index].selected = this.turn;
    }

    console.log(event);
  }

  toggleTurn(): void {
    if (this.turn === this.p1) {
      this.turn = this.p2;
    } else {
      this.turn = this.p1;
    }
  }
}
