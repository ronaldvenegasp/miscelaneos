import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{'font-size': tamano + 'px', 'color': 'red'}"> -->
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano = 10;

  constructor() { }

  ngOnInit() {
  }

}
