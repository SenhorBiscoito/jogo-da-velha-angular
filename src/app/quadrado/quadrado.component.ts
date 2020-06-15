import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss'],
})
export class QuadradoComponent implements OnInit {
  @Input() selected;
  @Input() disabled;

  constructor() {}

  ngOnInit(): void {}
}
