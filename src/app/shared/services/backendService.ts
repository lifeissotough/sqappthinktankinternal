import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class BackendService {
    baseUrl = environment.api;
    apiKey=environment.apiKey;
    constructor(private http: HttpClient) {
    }
    getFlightSummary(payload) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'apikey': this.apiKey });
        let options = { headers: headers };
        return this.http.post(this.baseUrl + "flight/passenger", payload, options);
    }

    getFlightOD(flightnumber) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'apikey': this.apiKey });
        let options = { headers: headers };
        return this.http.post(this.baseUrl + "meal/upliftplan",flightnumber , options);
    }
}