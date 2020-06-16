import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss'],
})
export class QuadradoComponent implements OnInit {
  @Input() selected;
  @Input() disabled;
  @Input() index;
  @Output() change = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    const { index, disabled } = this;
    this.change.emit({ index, disabled });
  }
}
