import { Component, OnInit, Input } from '@angular/core';
import { Label  } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  @Input('cLabels') chartLabels: Label[] = [];
  @Input('cData') chartData: number[] = [];
  @Input('cType') chartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
