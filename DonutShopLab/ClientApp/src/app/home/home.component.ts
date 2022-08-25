import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CartService } from '../cart.service';
import { DonutService, DonutInfo, bigDonut } from '../donut.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public loadedDonuts: bigDonut = new bigDonut();
  private isNewDonutsAvailableEventSubscribed: boolean = false;


  constructor(private thisDonutService: DonutService, private cartService: CartService) {
  }
  

  ngOnInit(): void {
    
    this.getDonutList();
    this.getItems();
   
  }

  public getItems() {

    this.cartService.getItems();
    console.log('Home Cart Items Total: ' + this.cartService.items.length.toString());
  }

  public getDonutList() {
    // The order is important here.  If we subscribe FIRST, we can guarantee we will receive
    // all data provided by the event.  If we subscribe SECOND, we may not.
    if (!this.isNewDonutsAvailableEventSubscribed) {
      this.thisDonutService.newDonutsAvailableEvent.subscribe((gotData) => {
        for (let currElementNo = 0; currElementNo < gotData.results.length; currElementNo++)
          this.loadedDonuts.results.push(gotData.results[currElementNo]);
        console.log("Data arrived!  We got " + gotData.results.length.toString() + " records.");
      })
      this.isNewDonutsAvailableEventSubscribed = true;
    }
    this.thisDonutService.GetInfoFromServer();
  }
 
  
  
}
 
