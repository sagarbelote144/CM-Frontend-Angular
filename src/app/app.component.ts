import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppService } from "./data/app.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  stockData: number;
  subscribedData: Subscription;
  constructor(private serviceData: AppService) {}
  ngOnInit() {
    this.subscribedData = this.serviceData.getstockData().subscribe(data => {
      this.stockData = data;
    });
  }
  ngOnDestroy() {
    this.subscribedData.unsubscribe();
  }
}
