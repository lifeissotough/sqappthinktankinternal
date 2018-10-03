import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { BackendService } from '../../shared/services/backendService';
//import { readdir } from 'fs';


@Component({
    selector: 'app-overbook',
    templateUrl: './overbook.component.html',
    styleUrls: ['./overbook.component.scss']
})
export class OverBookComponent implements OnInit {
    public model: any;
    private overbookedFlight: any;
    private checkflightOD: any;
    constructor(private backendService: BackendService) {
    }

    ngOnInit() {
      
      let flightnumber = { "flightNo": "SQ352", "flightDate": "2018-07-20" }
      let payload={ "flightNo": "SQ352", "flightDate": "2018-07-20" };

      this.backendService.getFlightOD(flightnumber).toPromise().then((result:any)=>{
        this.checkflightOD=result.response;
        console.log(this.checkflightOD);});


      this.backendService.getFlightSummary(payload).toPromise().then((result:any)=>{
        this.overbookedFlight=result.response;
        console.log(this.overbookedFlight);});





    }

}