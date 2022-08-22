import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { DonutService, DonutInfo } from '../donut.service'


@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
  
}



