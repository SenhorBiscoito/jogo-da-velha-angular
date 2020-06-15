import { Component, OnInit } from '@angular/core';
import { SelectedQuadrado } from '../selected-quadrado';

@Component({
  selector: 'app-quadrado-list',
  templateUrl: './quadrado-list.component.html',
  styleUrls: ['./quadrado-list.component.scss'],
})
export class QuadradoListComponent implements OnInit {
  posicoes: SelectedQuadrado[] = [];
  p1: string = '';
  p2: string = '';
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.posicoes.push({
        disabled: false,
        selected: '',
      });
    }
  }
}
