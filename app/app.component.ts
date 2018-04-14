import { Component, OnInit } from "@angular/core";
// import * as firebase from 'nativescript-plugin-firebase';
import * as connectivity from "tns-core-modules/connectivity";
import { CashService } from "~/services/cash-service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

  constructor(private cash: CashService) {}

    private subscribeToNetworkConnection(): void {
      connectivity.startMonitoring(newConnectionType => {
        if (newConnectionType === connectivity.connectionType.none) {
          this.cash.isOnline = false;
        } else {
          this.cash.isOnline = true;
        }
      });
    }

    ngOnInit(): void {
      this.subscribeToNetworkConnection();
        // firebase.init().then(() => {
        //     firebase.setValue(
        //         'companies',
        //         'bar12')
        // }).then(() => {
        //     const list = {
        //         title: 'LIST 1',
        //         id: 1,
        //         items: [
        //             {title: 'item 1', id: 0}
        //         ]
        //     }
        //     firebase.setValue('123', list)
        // })
    }
}
