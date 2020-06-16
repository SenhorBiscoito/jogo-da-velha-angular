import { Component, OnInit, ɵConsole } from '@angular/core';
import { SelectedQuadrado } from '../selected-quadrado';

@Component({
  selector: 'app-quadrado-list',
  templateUrl: './quadrado-list.component.html',
  styleUrls: ['./quadrado-list.component.scss'],
})
export class QuadradoListComponent implements OnInit {
  positions: SelectedQuadrado[] = [];
  positionsIndex: Number[] = [];
  resultados: number[][] = [];
  p1: string =
    'https://cdn.discordapp.com/attachments/689245269887418415/722241408874053719/eevee_dancing.gif';
  p2: string =
    'https://cdn.discordapp.com/attachments/689245269887418415/722241716542767104/lycanroc_warning.gif';
  turn: string;
  constructor() {}

  ngOnInit(): void {
    this.initialize();
  }

  handleSelect(event) {
    const { index, disabled } = event;

    if (!disabled) {
      this.updatePosition(index);
      this.verifyWinner();
      this.toggleTurn();
    }
  }

  toggleTurn(): void {
    if (this.turn === this.p1) {
      this.turn = this.p2;
    } else {
      this.turn = this.p1;
    }
  }

  updatePosition(index): void {
    this.positions[index].disabled = true;
    this.positions[index].selected = this.turn;
    this.positionsIndex.push(index);
  }

  verifyWinner(): void {
    for (let resultados of this.resultados) {
      if (
        this.positionsIndex.includes(resultados[0]) &&
        this.positionsIndex.includes(resultados[1]) &&
        this.positionsIndex.includes(resultados[2])
      ) {
        // COMPARA SE O INDEX DOS RESULTADOS É VÁLIDO
        const posicoesWinner = resultados.filter((resultado) => {
          return this.positions[resultado].selected === this.turn;
        });

        // VENCEDOR
        if (posicoesWinner.length === 3) {
          alert(`o vencedor é ${this.turn}`);
          this.resetGame();
          break;
        }

        // EMPATE
        if (this.positionsIndex.length === 9) {
          alert('ninguem ganhou');
          this.resetGame();
          break;
        }
      }
    }
  }

  resetGame(): void {
    this.positions = [];
    this.positionsIndex = [];

    // reinicia o jogo
    this.initialize();
  }

  initialize(): void {
    this.turn = this.p2;
    this.resultados = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < 9; i++) {
      this.positions.push({
        disabled: false,
        selected: '',
      });
    }
  }
}
