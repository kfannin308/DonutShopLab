import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details, DonutService } from '../donut.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private donutService: DonutService, private cartService: CartService) {

  }

  public loadedDetails: Details = new Details();
  private isNewDetailsAvailableEventSubscribed: boolean = false;

  public id: number = 0;

  ngOnInit(): void {
   
    let idString: string | null = "";
    idString = this._Activatedroute.snapshot.paramMap.get("id");
    this.id = Number.parseInt(idString!);
   
    this.GetDetails();
    this.cartService.getItems();
    
  }

  public GetDetails() {
    if (!this.isNewDetailsAvailableEventSubscribed) {
      this.donutService.newDetailAvailableEvent.subscribe((gotData) => {
        this.loadedDetails = gotData;
      })
      this.isNewDetailsAvailableEventSubscribed = true;
    }
    this.donutService.GetDonutDetails(this.id);
  }
  public addToCart(details: Details) {
    this.cartService.addToCart(details);
    window.alert('Your donut has been added to the cart! Total Items in Cart:' + this.cartService.items.length.toString());
    console.log('Details Add - Cart Items Total: ' + this.cartService.items.length.toString());
    
  }
  /*public getItems() {
 
    this.cartService.getItems();
    console.log('Details Cart Items Total: ' + this.cartService.items.length.toString());
  }*/
}
