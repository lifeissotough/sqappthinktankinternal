import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { BackendService } from '../../shared/services/backendService';
//import { readdir } from 'fs';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  @Component({
    selector: 'app-ob-status',
    templateUrl: './ob-status.component.html',
    styleUrls: ['./ob-status.component.scss']
})
export class OBStatusComponent implements OnInit {
  public model: any;
  private overbookedFlight: any;
    private checkflightOD: any;
    constructor(private backendService: BackendService) {
    }


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
    ngOnInit(){
      let payload={ "flightNo": "SQ352", "flightDate": "2018-07-20" };
      let flightnumber = { "flightNo": "SQ352", "flightDate": "2018-07-20" }


      this.backendService.getFlightOD(flightnumber).toPromise().then((result:any)=>{
        this.checkflightOD=result.response;
        console.log(this.checkflightOD);});


      this.backendService.getFlightSummary(payload).toPromise().then((result:any)=>{
        this.overbookedFlight=result.response;
        console.log(this.overbookedFlight);});

    }
}