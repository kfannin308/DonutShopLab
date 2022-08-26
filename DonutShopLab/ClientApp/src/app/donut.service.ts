import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DonutService {

  constructor(private httpClient: HttpClient) {
    console.log(" Donut Service Created");
}
 
  @Output() newDonutsAvailableEvent = new EventEmitter<bigDonut>();
  @Output() newDetailAvailableEvent = new EventEmitter<Details>();

  private storedDonutInfos: bigDonut | any;
  private storedBigDonut: bigDonut = new bigDonut;
  private storedSingleDonut: Details = new Details;


  public GetInfoFromServer() {
    let apiUrl: string = "https://grandcircusco.github.io/demo-apis/donuts.json";
    this.httpClient.get<bigDonut>(apiUrl).subscribe((gotData) => {
      this.storedDonutInfos = gotData;
      this.newDonutsAvailableEvent.emit(this.storedDonutInfos);
    });
  }
  public id: number  = 0;

  public GetDonutDetails(id: number) {
    let apiURL: string = "https://grandcircusco.github.io/demo-apis/donuts/" + id.toString() + ".json";
    this.httpClient.get<Details>(apiURL).subscribe((gotData) => {
      this.storedSingleDonut = gotData;
      this.newDetailAvailableEvent.emit(this.storedSingleDonut);
    });
  }
}


export class bigDonut {
  public count: number = 0;
  public results: DonutInfo[] = [];
}

export class DonutInfo {
  public id: number = 0;
  public ref: string = "";
  public name: string = "";
  public photo: string = "";
  public photo_attribution: string = "";
  
}

export class Details {
  public id: number = 0;
  public ref: string = "";
  public name: string = "";
  public photo: string = "";
  public photo_attribution: string = "";
  public calories: number = 0;
  public extras: string[] = [];
}

